import { Command } from 'commander'

export const janghood = () => {
  const cmd = new Command('janghood')
  cmd.command('janghood').description('JangHood toBe...')

  return cmd
}
