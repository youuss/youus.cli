#!/usr/bin/env node
import { Command } from 'commander'
import { TemplateLoader } from '@modules/template'
import { showAppHeader } from './console-print'

showAppHeader()

const youusCommander = new Command()

TemplateLoader.load(youusCommander)

youusCommander.parse()
