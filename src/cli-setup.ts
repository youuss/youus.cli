import type { Template } from 'src/types'

export const LibTemplate: Template = {
  vue2: {
    git: 'git@github.com:youuss/lib-template-vue2.git',
    desc: 'vue2组件库模版',
  },
}

export const TemplateMap: Record<string, Template> = {
  lib: LibTemplate,
}

export const templateConfigToArrary = (template: Template) => {
  return Object.keys(template).map((key) => ({
    title: template[key].desc,
    value: template[key].git,
  }))
}
