// Every firm detail lives here. Edit this file and all pages update.
// Anything still marked TODO shows up highlighted on the site.
// Run `npm run todos` to list what is left.

export const isTodo = (value: string) => value.startsWith('[TODO');

export const site = {
  // Keeps search engines out while this is false. Set it to true on launch day;
  // the build refuses to run with this true while any TODO remains.
  launched: false,

  // The live address, no trailing slash. Update this when the domain is connected.
  url: 'https://reva-associates.example',

  name: 'Reva Associates Ltd',
  shortName: 'Reva Associates',

  // Shown as the page description in search results, so it stays plain text.
  description: 'Accounting, tax and audit support for individuals and businesses in Uganda.',

  summary: '[TODO: one or two sentences describing the firm to a new client]',
  founded: '[TODO: year started]',
  icpau: '[TODO: ICPAU registration or practising certificate number]',
  staff: '[TODO: number of staff, or remove]',
  experience: '[TODO: years of team experience]',
  clients: '[TODO: approximate clients served]',
  memberships: '[TODO: memberships and certifications, e.g. ICPAU, ACCA]',
  story: '[TODO: two or three sentences on how the firm started and who it serves]',
  pricing: '[TODO: show "starting from" fees, or keep "contact us for a quote"]',

  contact: {
    address: '[TODO: building, floor or plot, street, area, city]',
    phone: '[TODO: main phone number]',
    // Digits only with country code, no + or spaces. Used for the one-tap link.
    whatsapp: '[TODO: WhatsApp number, digits only with 256 country code]',
    email: '[TODO: enquiries email address]',
    hours: '[TODO: office hours]',
    facebook: '',
    linkedin: '',
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

// Shown first, on the home page. Replace with the firm's real top priorities.
export const featuredServices = [
  'Tax returns & compliance',
  'Bookkeeping & accounting',
  'Statutory audits',
  'Business advisory',
];

export const clientTypes = [
  '[TODO: client type 1, e.g. small businesses]',
  '[TODO: client type 2, e.g. NGOs]',
  '[TODO: client type 3, e.g. schools]',
  '[TODO: client type 4, e.g. individuals]',
];

export const strengths = [
  { title: '[TODO: strength 1]', text: '[TODO: one line on what sets the firm apart]' },
  { title: '[TODO: strength 2]', text: '[TODO: one line on what sets the firm apart]' },
  { title: '[TODO: strength 3]', text: '[TODO: one line on what sets the firm apart]' },
];

// Drafted from the questionnaire's list. Delete anything the firm does not offer.
export const serviceGroups = [
  {
    title: 'Tax',
    items: [
      { name: 'Individual income tax returns', text: 'Preparing and filing personal returns with URA.' },
      { name: 'Company tax returns & compliance', text: 'Corporate returns, provisional tax and keeping filings on schedule.' },
      { name: 'VAT registration & returns', text: 'Registering for VAT and filing accurate monthly returns.' },
      { name: 'EFRIS setup & support', text: 'Getting set up on EFRIS and keeping invoicing running smoothly.' },
      { name: 'Tax advisory & planning', text: 'Structuring decisions so tax is planned for, not a surprise.' },
      { name: 'URA audits, objections & disputes', text: 'Support through URA audits, assessments and objections.' },
    ],
  },
  {
    title: 'Accounting & payroll',
    items: [
      { name: 'Bookkeeping & accounting', text: 'Keeping your records accurate and up to date.' },
      { name: 'Financial statements preparation', text: 'Clear annual and management accounts.' },
      { name: 'PAYE & payroll', text: 'Running payroll and filing PAYE returns.' },
      { name: 'NSSF & Local Service Tax', text: 'Monthly NSSF schedules and Local Service Tax compliance.' },
    ],
  },
  {
    title: 'Audit',
    items: [
      { name: 'Statutory audits', text: 'Independent audits of financial statements.' },
      { name: 'Internal audits', text: 'Reviewing controls and processes to reduce risk.' },
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

// Add a photo by putting the file in public/team/ and setting photo: '/team/name.jpg'.
export const team = [
  { name: '[TODO: full name]', title: '[TODO: job title]', quals: '[TODO: qualifications, e.g. CPA]', bio: '[TODO: two or three line bio]', photo: '' },
  { name: '[TODO: full name]', title: '[TODO: job title]', quals: '[TODO: qualifications, e.g. CPA]', bio: '[TODO: two or three line bio]', photo: '' },
  { name: '[TODO: full name]', title: '[TODO: job title]', quals: '[TODO: qualifications, e.g. CPA]', bio: '[TODO: two or three line bio]', photo: '' },
];
