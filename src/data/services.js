import sharepoint from '../assets/icons/sharepoint.svg';
import powerapps from '../assets/icons/powerapps.svg';
import powerautomate from '../assets/icons/powerautomate.svg';
import powerbi from '../assets/icons/powerbi.svg';
import azure from '../assets/icons/azure.png';
import dotnet from '../assets/icons/dotnet.svg';
import teams from '../assets/icons/teams.svg';
import m365 from '../assets/icons/m365.png';
import dataverse from '../assets/icons/dataverse.svg';
import entra from '../assets/icons/entra.svg';
import powerplatform from '../assets/icons/powerplatform.svg';
import copilotstudio from '../assets/icons/copilotstudio.svg';

export const services = [
  {
    slug: 'sharepoint',
    name: 'SharePoint',
    icon: sharepoint,
    title: 'SharePoint Consulting & Development',
    summary:
      'Modern intranets, document management and collaboration portals on SharePoint Online that people actually want to use.',
    intro: [
      'SharePoint sits at the center of content and collaboration in Microsoft 365. We help you plan, design and build SharePoint solutions that are easy to navigate, simple to govern and ready to grow with your organization.',
      'Whether you are launching a new intranet, bringing order to years of documents, or moving from an on-premises farm to SharePoint Online, our team covers the full journey from information architecture to custom development and ongoing support.',
    ],
    capabilities: [
      { title: 'Intranets & communication sites', text: 'Branded, mobile-friendly intranets with news, people directories, resource hubs and Viva Connections integration.' },
      { title: 'Document & records management', text: 'Content types, metadata, retention labels and approval processes that keep documents findable and compliant.' },
      { title: 'SPFx custom development', text: 'SharePoint Framework web parts, extensions and form customizations built with React and Microsoft Graph.' },
      { title: 'Migration to SharePoint Online', text: 'Assessment, planning and migration from SharePoint Server, file shares and other platforms with minimal disruption.' },
      { title: 'Information architecture', text: 'Hub sites, navigation, taxonomy and permission models designed around how your teams really work.' },
      { title: 'Governance & administration', text: 'Site lifecycle, sharing policies, provisioning and tenant configuration aligned with Microsoft best practice.' },
    ],
    engagements: [
      'Company intranet design and rollout',
      'On-premises to SharePoint Online migration',
      'Document management system with approvals',
      'Custom web parts and list form customization',
      'Health check and remediation of an existing tenant',
    ],
  },
  {
    slug: 'power-apps',
    name: 'Power Apps',
    icon: powerapps,
    title: 'Power Apps Development',
    summary:
      'Low-code business applications that replace spreadsheets, paper forms and legacy tools, delivered in weeks rather than months.',
    intro: [
      'Power Apps lets organizations turn manual, paper and spreadsheet-driven processes into secure applications that run on web and mobile. We design and build canvas and model-driven apps that fit your process instead of forcing your process to fit the tool.',
      'Our developers pair low-code speed with professional engineering practice: structured data models, reusable components, environment strategy and proper release management.',
    ],
    capabilities: [
      { title: 'Canvas apps', text: 'Tailored, task-focused apps for desktop, tablet and mobile with responsive layouts and offline support where needed.' },
      { title: 'Model-driven apps', text: 'Data-centric applications on Dataverse with forms, views, business rules and role-based security.' },
      { title: 'Dataverse data modeling', text: 'Well-structured tables, relationships and security roles that give your apps a solid foundation.' },
      { title: 'Integration & custom connectors', text: 'Connect apps to SharePoint, SQL, Dynamics 365, third-party APIs and line-of-business systems.' },
      { title: 'PCF components', text: 'Custom code components when the out-of-the-box controls are not enough.' },
      { title: 'ALM & governance', text: 'Solutions, pipelines, environments and Center of Excellence guidance to keep the platform under control.' },
    ],
    engagements: [
      'Replacing InfoPath and Excel-based forms',
      'Field inspection and audit apps for mobile',
      'Request, approval and tracking applications',
      'Asset, inventory and vendor management apps',
      'Modernizing Access databases on Dataverse',
    ],
  },
  {
    slug: 'power-automate',
    name: 'Power Automate',
    icon: powerautomate,
    title: 'Power Automate & Workflow Automation',
    summary:
      'Automated approvals, notifications and system integrations that remove repetitive work and reduce manual errors.',
    intro: [
      'Every organization has processes that depend on emails, reminders and copy-paste. Power Automate replaces that effort with reliable workflows that connect Microsoft 365 with the rest of your systems.',
      'We design flows that are maintainable and observable, with clear error handling, logging and ownership, so automation remains an asset long after go-live.',
    ],
    capabilities: [
      { title: 'Approval & document workflows', text: 'Multi-stage approvals, document generation, e-signature routing and reminders across SharePoint and Teams.' },
      { title: 'System integration', text: 'Cloud flows that move data between Microsoft 365, Dataverse, SQL, ERP/CRM systems and external APIs.' },
      { title: 'Desktop flows (RPA)', text: 'Robotic process automation for legacy applications that have no API.' },
      { title: 'Legacy workflow migration', text: 'Move SharePoint Designer, Nintex and InfoPath-based workflows to a supported, modern platform.' },
      { title: 'AI Builder', text: 'Document processing, form extraction and classification embedded directly into your flows.' },
      { title: 'Monitoring & resilience', text: 'Error handling patterns, retry policies, alerting and run history analysis for business-critical flows.' },
    ],
    engagements: [
      'Purchase, leave and expense approvals',
      'Employee onboarding and offboarding automation',
      'Invoice and document processing',
      'SharePoint 2010/2013 workflow replacement',
      'Scheduled reporting and data synchronization',
    ],
  },
  {
    slug: 'power-bi',
    name: 'Power BI',
    icon: powerbi,
    title: 'Power BI & Data Analytics',
    summary:
      'Clear, trustworthy dashboards and reports built on well-designed data models, so decisions rest on one version of the truth.',
    intro: [
      'Good reporting starts with good modeling. We work with your stakeholders to define the measures that matter, then build Power BI solutions that are fast, accurate and easy to explore.',
      'From a single departmental dashboard to an organization-wide reporting platform, we cover data preparation, modeling, visualization, security and rollout.',
    ],
    capabilities: [
      { title: 'Dashboards & reports', text: 'Executive, operational and self-service reports designed for clarity and quick insight.' },
      { title: 'Data modeling & DAX', text: 'Star-schema models and well-tested measures that perform at scale.' },
      { title: 'Data preparation', text: 'Power Query, dataflows and pipelines to consolidate data from SharePoint, SQL, Excel, Dataverse and cloud services.' },
      { title: 'Embedded analytics', text: 'Power BI reports embedded securely in SharePoint, Teams, Power Apps and custom .NET applications.' },
      { title: 'Security & governance', text: 'Row-level security, workspace strategy, deployment pipelines and usage monitoring.' },
      { title: 'Paginated reports', text: 'Pixel-perfect, print-ready operational reports and scheduled distribution.' },
    ],
    engagements: [
      'Management and KPI dashboards',
      'Sales, finance and operations reporting',
      'Consolidating Excel reports into Power BI',
      'Performance tuning of slow reports and models',
      'Reporting on SharePoint and Power Platform data',
    ],
  },
  {
    slug: 'azure',
    name: 'Azure',
    icon: azure,
    title: 'Microsoft Azure Solutions',
    summary:
      'Cloud applications, integrations and identity on Azure, architected for security, reliability and sensible running costs.',
    intro: [
      'When a requirement goes beyond what Microsoft 365 offers out of the box, Azure provides the building blocks. We design and deliver Azure solutions that extend your Microsoft 365 environment and host your custom applications.',
      'Our focus is on platform services — App Service, Functions, Logic Apps, Azure SQL and Microsoft Entra ID — so you get the benefits of the cloud without managing infrastructure you do not need.',
    ],
    capabilities: [
      { title: 'App Service & Functions', text: 'Web applications, APIs and serverless workloads that scale with demand.' },
      { title: 'Integration services', text: 'Logic Apps, Service Bus, Event Grid and API Management for dependable system-to-system integration.' },
      { title: 'Identity with Microsoft Entra ID', text: 'Single sign-on, app registrations, conditional access and secure API authorization.' },
      { title: 'Data & storage', text: 'Azure SQL, Cosmos DB, Blob Storage and data pipelines for application and reporting workloads.' },
      { title: 'DevOps & automation', text: 'CI/CD with Azure DevOps and GitHub Actions, infrastructure as code and environment management.' },
      { title: 'Monitoring & cost optimization', text: 'Application Insights, alerting and regular cost reviews to keep environments healthy and efficient.' },
    ],
    engagements: [
      'Azure Functions extending SharePoint and Power Platform',
      'Hosting and modernizing .NET applications',
      'API layers for line-of-business systems',
      'Single sign-on and identity integration',
      'CI/CD pipeline setup for development teams',
    ],
  },
  {
    slug: 'dotnet',
    name: '.NET',
    icon: dotnet,
    title: '.NET Application Development',
    summary:
      'Custom web applications, APIs and integrations built on modern .NET for requirements that need full-code flexibility.',
    intro: [
      'Some solutions need more than low-code. Our .NET developers build secure, maintainable applications and services that integrate naturally with Microsoft 365, Azure and your existing systems.',
      'We follow established engineering practice — clean architecture, automated testing, code review and continuous delivery — so the software we hand over is software your team can own.',
    ],
    capabilities: [
      { title: 'Web applications & APIs', text: 'ASP.NET Core applications and REST APIs with modern front ends in React or Blazor.' },
      { title: 'Microsoft Graph integrations', text: 'Applications that work with users, mail, calendars, files, Teams and SharePoint through Microsoft Graph.' },
      { title: 'Legacy modernization', text: 'Upgrading .NET Framework, Web Forms and WCF applications to current, supported .NET.' },
      { title: 'Background services', text: 'Scheduled jobs, queue processors and integration services running on Azure.' },
      { title: 'Database development', text: 'SQL Server and Azure SQL design, Entity Framework Core and performance tuning.' },
      { title: 'Quality & delivery', text: 'Unit and integration testing, code reviews and automated build and release pipelines.' },
    ],
    engagements: [
      'Customer and partner portals',
      'Custom APIs for Power Platform connectors',
      'Migrating legacy .NET Framework applications',
      'Provisioning and automation services for Microsoft 365',
      'Extending an existing product with new modules',
    ],
  },
  {
    slug: 'microsoft-teams',
    name: 'Microsoft Teams',
    icon: teams,
    title: 'Microsoft Teams Solutions',
    summary:
      'Teams apps, governance and provisioning that turn Microsoft Teams into a structured hub for everyday work.',
    intro: [
      'Teams is where much of the working day happens. We help you bring your processes, apps and information into Teams, and keep the environment organized as adoption grows.',
    ],
    capabilities: [
      { title: 'Teams apps & tabs', text: 'Custom tabs, personal apps and Power Apps surfaced where your people already work.' },
      { title: 'Bots & message extensions', text: 'Conversational experiences and quick actions that connect Teams to your business systems.' },
      { title: 'Provisioning & templates', text: 'Request-and-approve team creation with standard channels, tabs, naming and ownership.' },
      { title: 'Governance & lifecycle', text: 'Policies for guest access, expiration, archiving and sprawl control.' },
    ],
    engagements: [
      'Automated team and project workspace provisioning',
      'Approvals and notifications inside Teams',
      'Teams governance review and policy setup',
      'Embedding Power BI and Power Apps in Teams',
    ],
  },
  {
    slug: 'support',
    name: 'M365 Support',
    icon: m365,
    title: 'Microsoft 365 Support & Managed Services',
    summary:
      'Dependable ongoing support, administration and enhancement for your Microsoft 365 tenant and the solutions built on it.',
    intro: [
      'Solutions need care after go-live. Our support services give you access to experienced Microsoft 365 specialists for day-to-day issues, administration tasks and continuous improvement, without the overhead of building a full in-house team.',
      'Support is available for solutions we have built and for existing environments we take over after a structured onboarding and knowledge-transfer period.',
    ],
    capabilities: [
      { title: 'Application support', text: 'Incident resolution and fixes for SharePoint, Power Platform, Azure and .NET solutions.' },
      { title: 'Tenant administration', text: 'Day-to-day Microsoft 365 administration: sites, permissions, licensing, policies and configuration.' },
      { title: 'Enhancements & change requests', text: 'A steady flow of small improvements delivered through an agreed monthly capacity.' },
      { title: 'Monitoring & health checks', text: 'Proactive review of flows, apps, storage, security settings and service health.' },
      { title: 'Platform updates', text: 'Guidance on Microsoft roadmap changes, deprecations and new features relevant to your environment.' },
      { title: 'Training & adoption', text: 'User guides, admin handovers and training sessions that help teams get value from what they have.' },
    ],
    engagements: [
      'Monthly support retainer with agreed response times',
      'Taking over support for an existing solution',
      'Dedicated Microsoft 365 administrator capacity',
      'Periodic tenant health and security reviews',
      'Post-go-live hypercare',
    ],
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);

// Technology strip shown on the home page.
export const technologies = [
  { name: 'Microsoft 365', icon: m365 },
  { name: 'SharePoint', icon: sharepoint },
  { name: 'Power Platform', icon: powerplatform },
  { name: 'Power Apps', icon: powerapps },
  { name: 'Power Automate', icon: powerautomate },
  { name: 'Power BI', icon: powerbi },
  { name: 'Dataverse', icon: dataverse },
  { name: 'Copilot Studio', icon: copilotstudio },
  { name: 'Teams', icon: teams },
  { name: 'Azure', icon: azure },
  { name: 'Entra ID', icon: entra },
  { name: '.NET', icon: dotnet },
];
