import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import PDFDocument from 'pdfkit'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.join(__dirname, '../src/assets/resume.pdf')

const doc = new PDFDocument({
  margin: 48,
  size: 'LETTER',
  info: {
    Title: 'Jesus Andales - Resume',
    Author: 'Jesus Andales',
  },
})

doc.pipe(fs.createWriteStream(outputPath))

const colors = {
  text: '#111827',
  muted: '#334155',
  accent: '#0f766e',
  line: '#cbd5e1',
}

const left = doc.page.margins.left
const pageWidth = doc.page.width - doc.page.margins.left - doc.page.margins.right

function sectionTitle(title, { before = 1.1, after = 0.55 } = {}) {
  doc.moveDown(before)
  doc.font('Helvetica-Bold').fontSize(11).fillColor(colors.accent).text(title)
  const y = doc.y + 1
  doc.moveTo(left, y).lineTo(left + pageWidth, y).strokeColor(colors.line).lineWidth(1).stroke()
  doc.moveDown(after)
  doc.fillColor(colors.text)
}

function bullet(text) {
  const startY = doc.y
  doc.font('Helvetica').fontSize(9).fillColor(colors.muted)
  doc.text('•', left + 4, startY, { width: 10 })
  doc.text(text, left + 16, startY, { width: pageWidth - 16, lineGap: 1.1 })
  doc.moveDown(0.1)
}

// Header — original details
doc.font('Helvetica-Bold').fontSize(22).fillColor(colors.text).text('Jesus Andales')
doc.moveDown(0.15)
doc.font('Helvetica').fontSize(11).fillColor(colors.accent).text('Application Developer')
doc.moveDown(0.3)
doc.fontSize(8.5).fillColor(colors.muted)
doc.text('jesusandales021993@gmail.com  |  +659565722152')
doc.text('github.com/jandales  |  jandales.github.io')
doc.text('Brgy. San Pedro, Puerto Princesa City, Palawan')

// Professional Summary
sectionTitle('Professional Summary', { before: 1.4, after: 0.6 })
doc.font('Helvetica').fontSize(9).fillColor(colors.muted).text(
  'Web Developer with three years of experience in developing and maintaining web applications, implementing front-end and back-end functionality, and resolving technical issues. Proficient in C#, .NET, Ext JS, Entity Framework Core, and Liquibase, with a focus on building reliable and efficient software solutions.',
  { lineGap: 1.5 }
)

// Work Experience — synced from site
sectionTitle('Work Experience', { before: 1.2, after: 0.7 })

doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.text).text('Irely Philippines')
doc.font('Helvetica').fontSize(9).fillColor(colors.muted)
  .text('Application Developer / Software Engineer  |  3 years / Present')
doc.moveDown(0.35)

;[
  'Develop, enhance, and maintain applications supporting Accounts Receivable processes, including billing, invoicing, cash application, collections, and customer account management.',
  'Analyze business requirements and translate them into technical specifications and application solutions.',
  'Develop and maintain programs, interfaces, reports, and system integrations related to AR transactions.',
  'Investigate and resolve application issues, data discrepancies, and transaction errors affecting Accounts Receivable.',
  'Perform system testing, debugging, troubleshooting, and deployment of application changes.',
  'Collaborate with Finance and Accounting teams to understand business processes and implement system improvements.',
  'Develop and maintain reports, dashboards, and data extracts to support AR monitoring and financial reporting.',
  'Ensure data accuracy and integrity between Accounts Receivable and integrated systems such as General Ledger, Order Management, Billing, and Cash Management.',
  'Provide production support and respond to incidents according to agreed service levels.',
  'Identify opportunities to automate manual AR processes and improve system efficiency.',
].forEach(bullet)

doc.moveDown(0.85)
doc.font('Helvetica-Bold').fontSize(10).fillColor(colors.text).text('PTO Computer Sales and Services')
doc.font('Helvetica').fontSize(9).fillColor(colors.muted)
  .text('IT Support  |  5 years experience  |  2013 - 2018')
doc.moveDown(0.35)

;[
  'Provide first-level and second-level technical support to users for hardware, software, network, and system-related issues.',
  'Diagnose and troubleshoot desktop computers, laptops, printers, scanners, monitors, and other IT equipment.',
  'Install, configure, upgrade, and maintain operating systems, applications, drivers, and computer hardware.',
  'Set up and configure new computers, user accounts, workstations, and peripherals.',
  'Troubleshoot LAN/Wi-Fi connectivity, internet access, VPN, and basic network issues.',
  'Perform hardware repairs, preventive maintenance, system upgrades, and equipment replacement.',
  'Manage user accounts, passwords, permissions, and access to IT resources according to company policies.',
  'Perform data backup, system recovery, and basic security checks when required.',
].forEach(bullet)

// Education — original
sectionTitle('Education')
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(colors.text).text('Tan Ting Bing Memorial College Foundation Inc.')
doc.font('Helvetica').fontSize(9).fillColor(colors.muted).text('BS in Computer Science  |  2012 - 2015')
doc.text('San Isidro, Northern Samar')
doc.moveDown(0.25)
doc.font('Helvetica-Bold').fontSize(9.5).fillColor(colors.text).text('Puerto Princesa School of Arts and Trades')
doc.font('Helvetica').fontSize(9).fillColor(colors.muted).text('Computer Systems and Servicing (CSS)  |  2017')
doc.text('Brgy. Santa Monica, Puerto Princesa City, Palawan')

// Skills — original (unchanged)
sectionTitle('Skills')
doc.font('Helvetica-Bold').fontSize(9).fillColor(colors.text).text('Programming Language', { continued: true })
doc.font('Helvetica').fillColor(colors.muted).text(':  JavaScript (ES6), C#, PHP, Node.js, HTML, CSS')
doc.moveDown(0.12)
doc.font('Helvetica-Bold').fontSize(9).fillColor(colors.text).text('Libraries & Frameworks', { continued: true })
doc.font('Helvetica').fillColor(colors.muted).text(':  Laravel, Vue, Express, TailwindCss, jQuery, Bootstrap')
doc.moveDown(0.12)
doc.font('Helvetica-Bold').fontSize(9).fillColor(colors.text).text('Database', { continued: true })
doc.font('Helvetica').fillColor(colors.muted).text(':  MySQL, MongoDB')
doc.moveDown(0.12)
doc.font('Helvetica-Bold').fontSize(9).fillColor(colors.text).text('Tools', { continued: true })
doc.font('Helvetica').fillColor(colors.muted).text(':  VS Code, Sublime, GitHub')

doc.end()

await new Promise((resolve, reject) => {
  doc.on('end', resolve)
  doc.on('error', reject)
})

console.log(`Resume written to ${outputPath}`)
