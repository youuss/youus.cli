import type { Template } from 'src/types'

const LibTemplate: Template = {
  vue2: {
    git: 'git@github.com:youuss/lib-template-vue2.git',
    desc: 'lib-template-vue2-ts',
  },
}

const NodeTemplate: Template = {
  'node-template': {
    git: 'git@github.com:youuss/node-template.git',
    desc: 'node-template(ts+eslint)',
  },
}

const ProjectTemplate: Template = {}

const JangHoodTemplate: Template = {}

export const TemplateMap: Record<string, Template> = {
  lib: LibTemplate,
  node: NodeTemplate,
  janghood: JangHoodTemplate,
  project: ProjectTemplate,
}

export const INIT_TYPES = ['lib', 'project', 'janghood', 'node']

export const templateConfigToArrary = (template: Template) => {
  return Object.keys(template).map((key) => ({
    title: template[key].desc,
    value: template[key].git,
  }))
}
