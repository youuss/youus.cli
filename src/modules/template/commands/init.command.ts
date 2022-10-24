import { AbstractCommand } from '@modules/abstract'
import type { Input } from 'src/types'
import type { Command } from 'commander'

export class InitCommand extends AbstractCommand {
  public load(cmd: Command): void {
    cmd
      .command('init')
      .description(`init the type of template what you want`)
      .option(
        '-t, --type <type>',
        'init the type of template what you want',
        'project'
      )
      .action(async ({ type }) => {
        const options: Input[] = [{ name: 'type', value: type }]
        const inputs: Input[] = []
        await this.action.handle(inputs, options)
      })
  }
}
