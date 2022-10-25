import { AbstractCommand } from '@modules/abstract'
import { Option } from 'commander'
import { INIT_TYPES } from 'src/cli-setup'
import type { Command } from 'commander'
import type { Input } from 'src/types'

export class InitCommand extends AbstractCommand {
  public load(cmd: Command): void {
    cmd
      .command('init')
      .description(`init the type of template what you want`)
      .addOption(
        new Option(
          '-t, --type <type>',
          'choices the type of template whilc you want to init'
        )
          .choices(INIT_TYPES)
          .default('lib')
      )
      .action(async ({ type }) => {
        const options: Input[] = [{ name: 'type', value: type }]
        const inputs: Input[] = []
        await this.action?.handle(inputs, options)
      })
  }
}
