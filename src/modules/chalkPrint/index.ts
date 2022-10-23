import chalk from 'chalk'
import type { ChalkPrint } from 'src/types'

export const ErrorPrint = chalk.bold.red
export const WarningPrint = chalk.hex('#FFA500') // Orange color
export const SuccessPrint = chalk.bold.green
export const NormalPrint = chalk.bold.blue

const chalkPrint: ChalkPrint = {
  error: (msg: number | string) => console.log(ErrorPrint(msg)),
  warning: (msg: number | string) => console.log(WarningPrint(msg)),
  success: (msg: number | string) => console.log(SuccessPrint(msg)),
}

export default chalkPrint
