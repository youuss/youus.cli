import gitInquiry from '@modules/git/gitInquiry'
import chalkPrint from '@modules/chalkPrint'
import { AbstractAction } from '@modules/abstract'
import type { Input } from 'src/types'

export class InitAction extends AbstractAction {
  public async handle(
    inputs?: Input[] | undefined,
    options?: Input[] | undefined
  ): Promise<void> {
    const type = this.findValueInOptions<'lib' | 'project' | 'janghood'>(
      options,
      'type'
    )
    const gitSSH = await gitInquiry(type)
    chalkPrint.success(gitSSH)
  }

  private findValueInOptions<T>(
    options: Input[] | undefined,
    _name: string
  ): T {
    return options?.find(({ name }) => name === _name)?.value as T
  }
}
