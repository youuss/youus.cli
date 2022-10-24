#!/usr/bin/env node
import { Command } from 'commander'
import { showAppHeader } from './console-print'
import { TemplateLoader } from './modules/template/template.loader'

showAppHeader()

const youusCommander = new Command()

TemplateLoader.load(youusCommander)

youusCommander.parse()
