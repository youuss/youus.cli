import type { Template } from 'src/types'

export const LibTemplate: Template = {
  vue2: {
    git: 'git@github.com:youuss/lib-template-vue2.git',
    desc: 'lib-template-vue2-ts',
  },
}

export const ProjectTemplate: Template = {}

export const JangHoodTemplate: Template = {}

export const TemplateMap: Record<string, Template> = {
  lib: LibTemplate,
}

export const INIT_TYPES = ['lib', 'project', 'janghood']

export const templateConfigToArrary = (template: Template) => {
  return Object.keys(template).map((key) => ({
    title: template[key].desc,
    value: template[key].git,
  }))
}
