import { execSync } from 'child_process'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import os from 'os'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')
const remote = 'https://github.com/jandales/jandales.github.io.git'

function run(command, cwd = root) {
  console.log(`> ${command}`)
  execSync(command, { cwd, stdio: 'inherit' })
}

run('npm run build')

fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'))

const deployDir = fs.mkdtempSync(path.join(os.tmpdir(), 'jandales-gh-pages-'))
fs.cpSync(dist, deployDir, { recursive: true })

run('git init -b main', deployDir)
run('git add .', deployDir)
run('git -c user.name="Jesus Andales" -c user.email="jesusandales021993@gmail.com" commit -m "Deploy portfolio to GitHub Pages"', deployDir)
run(`git remote add origin ${remote}`, deployDir)
run('git push -u origin main --force', deployDir)

console.log('\nDeployed to https://jandales.github.io/')
