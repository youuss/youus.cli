import chalkPrint from '@modules/chalkPrint'
import { InitAction } from './actions'
import { InitCommand } from './commands'
import type { Command } from 'commander'

export class TemplateLoader {
  public static load(cmd: Command): void {
    new InitCommand(new InitAction()).load(cmd)
    this.handleInvalidCommand(cmd)
  }

  private static handleInvalidCommand(cmd: Command): void {
    cmd.on('command:*', () => {
      console.error(
        `\n Invalid command: ${chalkPrint.error('%s')}`,
        cmd.args.join(' ')
      )
      console.log(
        `See ${chalkPrint.error('--help')} for a list of available commands.\n`
      )
      process.exit(1)
    })
  }
}
