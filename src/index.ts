#!/usr/bin/env node
import { initTemplate } from '@modules/template'
import { janghood } from '@modules/janghood'
import YouusCommander from './YouusCommander'
import { showAppHeader } from './console-print'

showAppHeader()

const youusCommander = new YouusCommander('youus-cli')
youusCommander.name('youus-cli')

youusCommander.addTemplateCommand(initTemplate())

youusCommander.addJanHoodCommand(janghood())

youusCommander.parse()
