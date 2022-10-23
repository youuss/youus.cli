import chalk from 'chalk'
import fetch from 'node-fetch'
import packageJSON from '../package.json'

export function showAppHeader() {
  const localVersion = packageJSON.version
  console.log(
    `\n${chalk.bold.blue(`
  ___.__. ____  __ __ __ __  ______
 <   |  |/  _ \\|  |  \\  |  \\/  ___/
  \\___  (  <_> )  |  /  |  /\\___ \\ 
  / ____|\\____/|____/|____//____  >
  \\/                            \\/ 
    ${chalk.cyanBright(`[version: v${localVersion}]`)}
  `)}`
  )

  // Tips for latest version check
  try {
    fetch('https://registry.npmjs.org/-/package/@youus/youus-cli/dist-tags')
      .then((resp) => resp.json())
      .then((respJson: any) => {
        const respJsonLatest = respJson.latest
        if (respJsonLatest && respJsonLatest !== localVersion) {
          console.log(
            `\n💡 Latest version is ${chalk.bold.yellow(
              String(respJsonLatest)
            )},\n` +
              `   we recommend you to update by \`npm i -g @youus/youus-cli\``
          )
        }
      })
  } catch {}
}
