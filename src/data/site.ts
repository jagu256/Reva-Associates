// Every firm detail lives here. Edit this file and all pages update.
// Anything still marked TODO shows up highlighted on the site.
// Run `npm run todos` to list what is left.

export const isTodo = (value: string) => value.startsWith('[TODO');

export const site = {
  // Keeps search engines out while this is false. Set it to true on launch day;
  // the build refuses to run with this true while any TODO remains.
  launched: false,

  // The live address, no trailing slash.
  url: 'https://revaassociates.co.ug',

  name: 'Reva Associates Limited',
  shortName: 'Reva Associates',
  slogan: 'The Accounting Solutions',
  legalUpdated: '4 November 2026',

  // Shown as the page description in search results, so it stays plain text.
  description: 'Accounting, tax and URA audit support for businesses in Uganda.',

  summary:
    'Reva Associates Limited is a Ugandan accounting and tax firm, started in 2022. We help small and medium businesses with their compliance and support them through URA customs and tax audits, objections and disputes.',
  story:
    'Reva Associates was started in 2022, building on more than 25 years of accounting and tax experience. We have served more than 100 clients, from importers and manufacturers to NGOs, hotels and construction companies.',
  founded: '2022',
  experience: '25+ years',
  clients: '100+',
  taxAgent: 'Brijesh Patel',
  taxAgentNumber: 'CR01261983818',

  contact: {
    address: 'Plot 03, Wampewo Avenue, Kololo, Kampala, Uganda. P.O. Box 34708',
    phone: '+256 757 868120',
    // Digits only with country code, no + or spaces. Used for the one-tap link.
    whatsapp: '256757868120',
    email: 'accounts1@revaassociates.co.ug',
    hours: 'Mon–Fri 8:30 AM to 5:30 PM',
  },

  // Free key from web3forms.com, sent to the enquiries inbox.
  // It sits in the page source by design, so it is safe to commit.
  web3formsKey: '[TODO: Web3Forms access key]',
};

export const nav = [
  { href: '/', label: 'Home' },
  { href: '/about/', label: 'About' },
  { href: '/services/', label: 'Services' },
  { href: '/team/', label: 'Team' },
  { href: '/contact/', label: 'Contact' },
];

// Shown first, on the home page, in the firm's order of priority.
export const featuredServices = [
  'URA customs audits',
  'URA audits, objections & disputes',
  'Financial statements preparation',
  'Internal audits',
  'Bookkeeping & accounting',
  'Management report preparation',
];

export const clientTypes = [
  'Small and medium companies',
  'Import and trading businesses',
  'Manufacturing companies',
  'NGOs',
  'Service industries',
  'Hotels and restaurants',
  'Agriculture businesses',
  'Construction companies',
];

export const clients = [
  'Kooke Enterprises Ltd',
  'Autozone Professional Ltd',
  'Selective Services Ltd',
  'Jati Umra Construction Ltd',
  'Union Logistics Ltd',
];

export const strengths = [
  { title: 'Over 25 years of experience', text: 'Decades of hands-on accounting and tax work behind every engagement.' },
  { title: 'URA customs and tax focus', text: 'Customs audits, tax audits, objections and disputes are at the centre of what we do.' },
  { title: 'URA-registered tax agent', text: 'Brijesh Patel is a URA-registered tax agent.' },
];

export const serviceGroups = [
  {
    title: 'URA audits & disputes',
    items: [
      { name: 'URA customs audits, objections & disputes', text: 'Support through customs audits, assessments, objections and disputes.' },
      { name: 'URA audits, objections & disputes', text: 'Support through URA tax audits, assessments and objections.' },
    ],
  },
  {
    title: 'Tax',
    items: [
      { name: 'Individual income tax returns', text: 'Preparing and filing personal returns with URA.' },
      { name: 'Company tax returns & compliance', text: 'Corporate returns, provisional tax and help staying on top of filing dates.' },
      { name: 'VAT registration & returns', text: 'Registering for VAT and preparing and filing returns.' },
      { name: 'EFRIS setup & support', text: 'Getting set up on EFRIS and keeping invoicing running smoothly.' },
      { name: 'Tax advisory & planning', text: 'Helping you plan ahead for the tax effects of business decisions.' },
    ],
  },
  {
    title: 'Accounting & payroll',
    items: [
      { name: 'Bookkeeping & accounting', text: 'Keeping your records organised and up to date.' },
      { name: 'Financial statements preparation', text: 'Clear, well-prepared annual accounts.' },
      { name: 'Management report preparation', text: 'Regular reports that show how the business is doing.' },
      { name: 'Internal audits', text: 'Reviewing controls and processes to reduce risk.' },
      { name: 'PAYE & payroll', text: 'Running payroll and filing PAYE returns.' },
      { name: 'NSSF & Local Service Tax', text: 'NSSF schedules and Local Service Tax compliance.' },
    ],
  },
  {
    title: 'Company & advisory',
    items: [
      { name: 'Company registration', text: 'Registering your business with URSB.' },
      { name: 'Company secretarial services', text: 'Annual returns, resolutions and statutory records.' },
      { name: 'Business advisory & consultancy', text: 'Practical financial advice as your business grows.' },
    ],
  },
];

export const team = [
  {
    name: 'Brijesh Patel',
    title: 'Shareholder',
    quals: 'URA-registered tax agent',
    bio: 'Brijesh Patel is a shareholder of Reva Associates Limited and oversees client engagements and quotes.',
  },
];
