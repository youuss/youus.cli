import ora from 'ora'
import type { Input } from 'src/types'

export abstract class AbstractAction {
  public spinner
  constructor() {
    this.spinner = ora()
  }
  public abstract handle(
    inputs?: Input[],
    options?: Input[],
    extraFlags?: string[]
  ): Promise<void>
}
