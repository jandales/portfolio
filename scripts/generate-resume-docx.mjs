import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  AlignmentType,
  BorderStyle,
  HeadingLevel,
} from 'docx'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const outputPath = path.join(__dirname, '../src/assets/resume.docx')

const accent = '0F766E'
const muted = '334155'
const text = '111827'

function sectionHeading(title) {
  return new Paragraph({
    spacing: { before: 280, after: 120 },
    border: {
      bottom: {
        color: 'CBD5E1',
        space: 4,
        style: BorderStyle.SINGLE,
        size: 12,
      },
    },
    children: [
      new TextRun({
        text: title,
        bold: true,
        size: 22,
        color: accent,
        font: 'Calibri',
      }),
    ],
  })
}

function body(textContent, options = {}) {
  return new Paragraph({
    spacing: { after: options.after ?? 80, before: options.before ?? 0, line: 276 },
    children: [
      new TextRun({
        text: textContent,
        size: 18,
        color: muted,
        font: 'Calibri',
      }),
    ],
  })
}

function jobTitle(company) {
  return new Paragraph({
    spacing: { before: 160, after: 40 },
    children: [
      new TextRun({
        text: company,
        bold: true,
        size: 20,
        color: text,
        font: 'Calibri',
      }),
    ],
  })
}

function jobMeta(meta) {
  return new Paragraph({
    spacing: { after: 80 },
    children: [
      new TextRun({
        text: meta,
        size: 18,
        color: muted,
        font: 'Calibri',
      }),
    ],
  })
}

function bullet(textContent) {
  return new Paragraph({
    spacing: { after: 60, line: 276 },
    indent: { left: 220 },
    children: [
      new TextRun({
        text: `•  ${textContent}`,
        size: 18,
        color: muted,
        font: 'Calibri',
      }),
    ],
  })
}

function skillLine(label, value) {
  return new Paragraph({
    spacing: { after: 60 },
    children: [
      new TextRun({
        text: `${label}: `,
        bold: true,
        size: 18,
        color: text,
        font: 'Calibri',
      }),
      new TextRun({
        text: value,
        size: 18,
        color: muted,
        font: 'Calibri',
      }),
    ],
  })
}

const irelyBullets = [
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
]

const ptoBullets = [
  'Provide first-level and second-level technical support to users for hardware, software, network, and system-related issues.',
  'Diagnose and troubleshoot desktop computers, laptops, printers, scanners, monitors, and other IT equipment.',
  'Install, configure, upgrade, and maintain operating systems, applications, drivers, and computer hardware.',
  'Set up and configure new computers, user accounts, workstations, and peripherals.',
  'Troubleshoot LAN/Wi-Fi connectivity, internet access, VPN, and basic network issues.',
  'Perform hardware repairs, preventive maintenance, system upgrades, and equipment replacement.',
  'Manage user accounts, passwords, permissions, and access to IT resources according to company policies.',
  'Perform data backup, system recovery, and basic security checks when required.',
]

const doc = new Document({
  sections: [
    {
      properties: {
        page: {
          margin: {
            top: 720,
            right: 720,
            bottom: 720,
            left: 720,
          },
        },
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: 'Jesus Andales',
              bold: true,
              size: 44,
              color: text,
              font: 'Calibri',
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: 'Application Developer',
              size: 22,
              color: accent,
              font: 'Calibri',
            }),
          ],
        }),
        body('jesusandales021993@gmail.com  |  +659565722152', { after: 20 }),
        body('github.com/jandales  |  jandales.github.io', { after: 20 }),
        body('Brgy. San Pedro, Puerto Princesa City, Palawan', { after: 200 }),

        sectionHeading('Professional Summary'),
        body(
          'Web Developer with three years of experience in developing and maintaining web applications, implementing front-end and back-end functionality, and resolving technical issues. Proficient in C#, .NET, Ext JS, Entity Framework Core, and Liquibase, with a focus on building reliable and efficient software solutions.',
          { after: 120 }
        ),

        sectionHeading('Work Experience'),
        jobTitle('Irely Philippines'),
        jobMeta('Application Developer / Software Engineer  |  3 years / Present'),
        ...irelyBullets.map(bullet),

        jobTitle('PTO Computer Sales and Services'),
        jobMeta('IT Support  |  5 years experience  |  2013 - 2018'),
        ...ptoBullets.map(bullet),

        sectionHeading('Education'),
        jobTitle('Tan Ting Bing Memorial College Foundation Inc.'),
        body('BS in Computer Science  |  2012 - 2015', { after: 20 }),
        body('San Isidro, Northern Samar', { after: 100 }),
        jobTitle('Puerto Princesa School of Arts and Trades'),
        body('Computer Systems and Servicing (CSS)  |  2017', { after: 20 }),
        body('Brgy. Santa Monica, Puerto Princesa City, Palawan', { after: 100 }),

        sectionHeading('Skills'),
        skillLine('Programming Language', 'JavaScript (ES6), C#, PHP, Node.js, HTML, CSS'),
        skillLine('Libraries & Frameworks', 'Laravel, Vue, Express, TailwindCss, jQuery, Bootstrap'),
        skillLine('Database', 'MySQL, MongoDB'),
        skillLine('Tools', 'VS Code, Sublime, GitHub'),
      ],
    },
  ],
})

const buffer = await Packer.toBuffer(doc)
fs.writeFileSync(outputPath, buffer)
console.log(`Word resume written to ${outputPath}`)
