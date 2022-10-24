import type { Command } from 'commander'
import type { AbstractAction } from './abstract.action'

export abstract class AbstractCommand {
  constructor(protected action: AbstractAction) {}

  public abstract load(cmd: Command): void
}
