import prompts from 'prompts'
import { TemplateMap, templateConfigToArrary } from 'src/cli-setup'
import type { PromptObject } from 'prompts'

export interface InitAnswer {
  gitUrl: string
  project: string
}

export const initInquiry: (type: string) => Promise<InitAnswer> = (type) =>
  new Promise<InitAnswer>((resolve, reject) => {
    if (Object.keys(TemplateMap[type]).length === 0) {
      reject(`this type of【${type}】has no template to init`)
    }
    const gitInitQuestions: PromptObject[] = [
      {
        type: 'select',
        name: 'gitUrl',
        message: 'Select the tempalte which you want to init',
        choices: templateConfigToArrary(TemplateMap[type]),
      },
      {
        type: 'text',
        name: 'project',
        message: `Input your ${type}‘s name`,
      },
    ]
    const answers = prompts(gitInitQuestions) as Promise<InitAnswer>
    resolve(answers)
  })
