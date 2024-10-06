import { ContactInfoLabels } from "@/services/data/labels/labels.data.service";

const ADDRESS_EN = 'Montfoort, Netherlands';
const ADDRESS_NL = 'Montfoort, Nederland';

export type ContactInfoItem = {
  label: string,
  value: string,
  display: 'email' | 'href' | 'plain',
  displayData?: string
}

export default class ContactDataService {
  public getEmail() {
    return 'niek@dewitsoftware.nl'
  };
  public getLinkedIn() {
    return 'linkedin.com/in/niekdewit/'
  };
  public getAddress(language: 'en' | 'nl') {
    return language === 'en' ? ADDRESS_EN : ADDRESS_NL
  };
  public getContactInfo(language: 'en' | 'nl', _labels: ContactInfoLabels): ContactInfoItem[] {
    return [
      {
        label: _labels.email,
        value: this.getEmail(),
        display: 'email',
        displayData: this.getEmail()
      },
      {
        label: _labels.github,
        value: 'niek-dewit',
        display: 'href',
        displayData: 'https://github.com/niek-dewit'
      },
      {
        label: _labels.linkedIn,
        value: this.getLinkedIn(),
        display: 'href',
        displayData: 'https://www.'+this.getLinkedIn()
      },
      {
        label: _labels.address,
        value: this.getAddress(language),
        display: 'plain'
      },
      {
        label: _labels.phone,
        value: _labels.onRequest,
        display: 'plain'
      },
      {
        label: _labels.taxNumber,
        value: 'NL005090024B47',
        display: 'plain'
      },
      {
        label: _labels.kvkNumber,
        value: '94525447',
        display: 'plain'
      },
    ];
  }
}