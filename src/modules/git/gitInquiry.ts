import prompts from 'prompts'
import { TemplateMap, templateConfigToArrary } from 'src/cli-setup'
import type { PromptObject } from 'prompts'

const gitInquiry = async (type: string) => {
  const gitInitQuestions: PromptObject[] = [
    {
      type: 'select',
      name: 'gitSSH',
      message: '请选择需要使用的模版',
      choices: templateConfigToArrary(TemplateMap[type]),
    },
  ]
  const { gitSSH } = await prompts(gitInitQuestions)
  return gitSSH
}

export default gitInquiry
