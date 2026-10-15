<template>
    <div  class="mb-4 ">
        <h3 data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="1500"
            class="mb-6 block py-4 text-center text-sm font-semibold uppercase tracking-[0.2em] !text-violet-600 dark:!text-violet-300 lg:text-left">EXPERIENCE</h3>
        <div>
        <ul 
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1500"
            v-for="experience in experiences"
            :key="experience.campany" 
            class="mb-4 w-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/5 lg:mx-0">
            <li class="flex items-center py-1 text-base font-semibold !text-neutral-900 dark:!text-white">
                <span class="mr-3 text-xs !text-violet-500">
                    <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>                 
                {{experience.campany}}
            </li>
            <li class="ml-5 flex items-center py-1 !text-slate-600 dark:!text-slate-300">
                <span class="mr-3 text-xs !text-violet-500">
                     <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>                         
                {{ experience.position }}   
            </li> 
            <li class="ml-5 flex items-center py-1 !text-slate-600 dark:!text-slate-300">
                <span class="mr-3 text-xs !text-violet-500">
                    <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>                          
                {{ experience.years }} 
            </li> 
             <li class="ml-5 items-center py-1 font-medium !text-neutral-900 dark:!text-white">
                <span class="mr-3 text-xs !text-violet-500">
                    <font-awesome-icon icon="fa-solid fa-caret-right" />
                </span>                          
                 Job Description                       
                        <ul
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1500"  
                              v-for="responsibilities in experience.responsibilities"
                                :key="experience.Responsibility"  
                        >    
                         <li class="ml-5 flex py-1 !text-slate-600 dark:!text-slate-300">
                            <span class="mr-3 mt-1 text-xs !text-violet-500">
                                <font-awesome-icon icon="fa-solid fa-caret-right" />                            
                            </span>                          
                            {{ responsibilities.Responsibility }} 
                        </li>                      
                        </ul>  
                 
            </li>   
             
                         
        </ul>                  
        </div>
    </div>
</template>

<script setup>
 const experiences = [
    {
     id: 1,
     campany : 'Irely Philippines',
     position : 'Application Developer / Software Engineer',
     years: '3 years / Present',

     responsibilities : [
        {
           Responsibility: 'Responsible for developing, maintaining, and supporting applications and systems related to the Accounts Receivable (AR) process. Work closely with Finance, Accounting, and business teams to ensure accurate, efficient, and reliable processing of customer receivables and related transactions.'
        },
        {
           Responsibility: 'Develop, enhance, and maintain applications supporting Accounts Receivable processes, including billing, invoicing, cash application, collections, and customer account management.' 
        },
        {
           Responsibility: 'Analyze business requirements and translate them into technical specifications and application solutions.' 
        },
        {
           Responsibility: 'Develop and maintain programs, interfaces, reports, and system integrations related to AR transactions.' 
        },
        {
           Responsibility: 'Support the processing and reconciliation of customer invoices, payments, credit/debit memos, and account balances.'
        },
        {
             Responsibility:'Investigate and resolve application issues, data discrepancies, and transaction errors affecting Accounts Receivable.'
        },
        {
             Responsibility:'Perform system testing, debugging, troubleshooting, and deployment of application changes.'
        },
        {
            Responsibility: 'Collaborate with Finance and Accounting teams to understand business processes and implement system improvements.'
        },
        {
            Responsibility: 'Develop and maintain reports, dashboards, and data extracts to support AR monitoring and financial reporting.'
        },
        {
             Responsibility:'Ensure data accuracy and integrity between Accounts Receivable and integrated systems such as General Ledger, Order Management, Billing, and Cash Management.'
        },
        {
            Responsibility: 'Participate in system upgrades, enhancements, and process automation initiatives.'
        },
        {
             Responsibility: 'Prepare technical documentation, process documentation, and user support materials.'
        }, 
        {
             Responsibility: 'Provide production support and respond to incidents according to agreed service levels.'
        }, 
        {
             Responsibility: 'Identify opportunities to automate manual AR processes and improve system efficiency.'
        }, 
        {
             Responsibility: 'Follow company standards for software development, testing, security, and change management.'
        }
     ]
    },
   {
     id: 0,
     campany : 'PTO Computer Sales and Services',
     position : 'IT Support',
     years: '5 years experience',
     responsibilities : [
        {
           Responsibility: 'Responsible for providing technical support, troubleshooting, maintenance, and administration of computer hardware, software, networks, and IT equipment to ensure reliable and efficient day-to-day operations.'
        },
        {
           Responsibility: 'Provide first-level and second-level technical support to users for hardware, software, network, and system-related issues.' 
        },
        {
           Responsibility: 'Diagnose and troubleshoot desktop computers, laptops, printers, scanners, monitors, and other IT equipment.' 
        },
        {
           Responsibility: 'Install, configure, upgrade, and maintain operating systems, applications, drivers, and computer hardware.' 
        },
        {
           Responsibility: 'Set up and configure new computers, user accounts, workstations, and peripherals.'
        },
        {
             Responsibility:'Troubleshoot LAN/Wi-Fi connectivity, internet access, VPN, and basic network issues.'
        },
        {
             Responsibility:'Perform hardware repairs, preventive maintenance, system upgrades, and equipment replacement.'
        },
        {
            Responsibility: 'Install and configure business applications and assist users with software-related concerns.'
        },
        {
            Responsibility: 'Manage user accounts, passwords, permissions, and access to IT resources according to company policies.'
        },
        {
             Responsibility:'Monitor and maintain IT equipment and keep accurate records of hardware and software assets.'
        },
        {
            Responsibility: 'Perform data backup, system recovery, and basic security checks when required.'
        },
        {
             Responsibility: 'Troubleshoot email, printing, file-sharing, and other common workplace IT issues.'
        },        
    ]
   }   
   ]
  
</script>