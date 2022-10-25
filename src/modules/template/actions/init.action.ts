import path from 'node:path'
import fs from 'fs-extra'
import { initInquiry } from '@modules/git/git.inquiries'
import chalkPrint from '@modules/chalkPrint'
import { AbstractAction } from '@modules/abstract'
import gitClone from 'git-clone'
import type { Input, TemplateTypes } from 'src/types'

export class InitAction extends AbstractAction {
  public async handle(
    inputs?: Input[] | undefined,
    options?: Input[] | undefined
  ): Promise<void> {
    const type = this.findValueInOptions<TemplateTypes>(options, 'type')
    await initInquiry(type)
      .then(async (answer) => {
        const currentRepos = path.join(process.cwd(), answer.project)
        if (fs.existsSync(currentRepos)) {
          chalkPrint.warning(
            `Sorry, your current directory already has ${answer.project}.`
          )
          return
        }
        try {
          this.spinner.start('模版下载中...')
          await gitClone(
            `${answer.gitUrl}`,
            `./${answer.project}`,
            undefined,
            async (error) => {
              if (!error) {
                this.spinner.succeed(`${answer.project}模版初始化成功！`)
                await fs.removeSync(`${currentRepos}/.git`)
                await this.updatePkgFile(answer.project, currentRepos)
              } else {
                this.spinner.stop()
                chalkPrint.error(error.message)
              }
            }
          )
        } catch (err) {
          chalkPrint.error(`${err}`)
        }
      })
      .catch((reason: string) => {
        chalkPrint.error(reason)
      })
  }

  private findValueInOptions<T>(
    options: Input[] | undefined,
    _name: string
  ): T {
    return options?.find(({ name }) => name === _name)?.value as T
  }

  private async updatePkgFile(project: string, target: string) {
    this.spinner.start('正在更新package.json...')
    const pkgPath = path.resolve(target, 'package.json')
    const unnecessaryKey = ['keywords', 'license', 'files']

    const jsonData = fs.readJsonSync(pkgPath)
    unnecessaryKey.forEach((key) => delete jsonData[key])
    Object.assign(jsonData, {
      name: project,
      version: '1.0.0',
    })
    await fs.writeJsonSync(pkgPath, jsonData, { spaces: '\t' })
    this.spinner.succeed('package.json更新完成！')
  }
}
