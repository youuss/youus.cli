import chalkPrint from '@modules/chalkPrint'
import gitInquiry from '@modules/git/gitInquiry'
import { Command } from 'commander'

export const initTemplate = () => {
  const cmd = new Command('youus-cli')
  cmd
    .command('init')
    .description(`init the type of template what you want`)
    .option(
      '-t, --type <type>',
      'init the type of template what you want',
      'project'
    )
    .action(async ({ type }) => {
      chalkPrint.success(type)
      const gitSSH = await gitInquiry(type)
      chalkPrint.success(gitSSH)
    })

  return cmd
}
