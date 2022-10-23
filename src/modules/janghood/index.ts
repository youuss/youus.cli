import { Command } from 'commander'

export const janghood = () => {
  const cmd = new Command('youus-cli')
  cmd.command('janghood').description('JangHood toBe...')

  return cmd
}
