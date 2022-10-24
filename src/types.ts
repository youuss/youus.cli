export type ChalkPrintFunc = (msg: string | number) => void

export type ChalkPrint = {
  error: ChalkPrintFunc
  success: ChalkPrintFunc
  warning: ChalkPrintFunc
}

export type TemplateDesc = {
  git: string
  desc: string
}

export type Template = {
  [K in string]: TemplateDesc
}

export interface Input {
  name: string
  value: boolean | string
  options?: any
}
