export type ContactInfoLabels = {
  linkedIn: string
  phone: string
  email: string
  github: string
  address: string
  taxNumber: string
  kvkNumber: string
  onRequest: string
};
export type Labels = {
  menu: {
    projects: string,
    about: string,
    contact: string,
    skills: string,
    downloads: string
  },
  header: {
    title: string,
    subtitle: string,
  },
  time: {
    year: string,
    years: string,
    month: string,
    months: string,
    day: string,
    days: string,
    hour: string,
    hours: string,
    minute: string,
    minutes: string,
  },
  date: {
    january: string
    february: string
    march: string
    april: string
    may: string
    june: string
    july: string
    august: string
    september: string
    october: string
    november: string
    december: string
    now: string
  },
  downloads: {
    print: string,
    download: string,
    source: string
  },
  contact: ContactInfoLabels,
  projects: {
    recommendation: {
      letter: string,
      linkedin: string
    }
    type: {
      work: string
      personalProject: string
    }
    commitment: {
      fullTime: string
      onCall: string
      partTime: string
    },
    remote: {
      remote: string
      onLocation: string
    },
  },
  and: string,
};









const LABELS_EN: Labels = {
  menu: {
    projects: 'Projects',
    about: 'About',
    contact: 'Contact',
    skills: 'Skills',
    downloads: 'Downloads'
  },
  header: {
    title: 'de Wit Software',
    subtitle: 'Full-stack development',
  },
  time: {
    year: 'year',
    years: 'years',
    month: 'month',
    months: 'months',
    day: 'day',
    days: 'days',
    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
  },
  date: {
    january: 'Jan.',
    february: 'Feb.',
    march: 'Mar.',
    april: 'Apr.',
    may: 'May.',
    june: 'Jun.',
    july: 'Jul.',
    august: 'Aug.',
    september: 'Sep.',
    october: 'Oct.',
    november: 'Nov.',
    december: 'Dec.',
    now: 'Ongoing'
  },
  downloads: {
    print: 'Print my resume',
    download: 'Download my resume (PDF)',
    source: 'Source of this website'
  },
  contact: {
    linkedIn: 'LinkedIn',
    phone: 'Phone',
    email: 'Email',
    github: 'Github',
    address: 'Address',
    taxNumber: 'VAT number',
    kvkNumber: 'KVK number',
    onRequest: 'On request'
  },
  projects: {
    recommendation: {
      letter: 'Letter of recommendation',
      linkedin: 'LinkedIn recommendation'
    },
    type: {
      work: 'Professional project',
      personalProject: 'Personal project'
    },
    commitment: {
      fullTime: 'Full-time',
      onCall: 'On call',
      partTime: 'Part-time'
    },
    remote: {
      remote: 'Remote',
      onLocation: 'On-location'
    },
  },
  and: 'and',
};

const LABELS_NL: Labels = {
  menu: {
    projects: 'Projecten',
    about: 'Over',
    contact: 'Contact',
    skills: 'Vaardigheden',
    downloads: 'Downloads'
  },
  header: {
    title: 'de Wit Software',
    subtitle: 'Full-stack development',
  },

  time: {
    year: 'jaar',
    years: 'jaar',
    month: 'maand',
    months: 'maanden',
    day: 'dag',
    days: 'dagen',
    hour: 'uur',
    hours: 'uren',
    minute: 'minuut',
    minutes: 'minuten',
  },
  date: {
    january: 'Jan.',
    february: 'Feb.',
    march: 'Mrt.',
    april: 'Apr.',
    may: 'Mei.',
    june: 'Jun.',
    july: 'Jul.',
    august: 'Aug.',
    september: 'Sep.',
    october: 'Okt.',
    november: 'Nov.',
    december: 'Dec.',
    now: 'Lopend'
  },
  downloads: {
    print: 'Print mijn CV',
    download: 'Download mijn CV (PDF)',
    source: 'Source van deze website'
  },
  contact: {
    linkedIn: 'LinkedIn',
    phone: 'Telefoon',
    email: 'Email',
    github: 'Github',
    address: 'Adres',
    taxNumber: 'BTW nummer',
    kvkNumber: 'KVK nummer',
    onRequest: 'Op verzoek'
  },
  projects: {
    recommendation: {
      letter: 'Aanbevelingsbrief',
      linkedin: 'LinkedIn aanbeveling'
    },
    type: {
      work: 'Professioneel project',
      personalProject: 'Persoonlijk project'
    },
    commitment: {
      fullTime: 'Full-time',
      onCall: 'Oproep',
      partTime: 'Part-time'
    },
    remote: {
      remote: 'Remote',
      onLocation: 'Op locatie'
    },
  },
  and: 'en',
};


export default class LabelsDataService {
  public getLabels(language: 'en' | 'nl'): Labels {
    return language === 'en' ? LABELS_EN : LABELS_NL;
  }
}