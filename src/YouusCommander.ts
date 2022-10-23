import { Command, Option } from 'commander'
import type { CommandOptions } from 'commander'

class YouusCommander extends Command {
  createCommand(name?: string | undefined): Command {
    const cmd = new Command(name)
    cmd.addOption(
      new Option(
        '-t, --type <type>',
        'init the type of template what you want'
      ).choices(['lib', 'project', 'janghood'])
    )
    return cmd
  }
  addJanHoodCommand(cmd: Command, opts?: CommandOptions | undefined) {
    const command = new Command('youus-cli')
    command.addCommand(cmd, opts)
  }
  addTemplateCommand(cmd: Command, opts?: CommandOptions | undefined) {
    const command = new Command('youus-cli')
    command.addCommand(cmd, opts)
  }
}

export default YouusCommander
