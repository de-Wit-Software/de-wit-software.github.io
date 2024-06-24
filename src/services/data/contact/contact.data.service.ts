import { ContactInfoLabels } from "@/services/data/labels/labels.data.service";

const ADDRESS_EN = 'Montfoort, Utrecht, Netherlands';
const ADDRESS_NL = 'Montfoort, Utrecht, Nederland';

export type ContactInfoItem = {
  label: string,
  value: string,
  display: 'email' | 'href' | 'plain',
  displayData?: string
}

export default class ContactDataService {
  public getContactInfo(language: 'en' | 'nl', _labels: ContactInfoLabels): ContactInfoItem[] {
    return [
      {
        label: _labels.email,
        value: 'info@dewitsoftware.nl',
        display: 'email',
        displayData: 'info@dewitsoftware.nl'
      },
      {
        label: _labels.github,
        value: 'niek-dewit',
        display: 'href',
        displayData: 'https://github.com/niek-dewit'
      },
      {
        label: _labels.linkedIn,
        value: 'niekdewit',
        display: 'href',
        displayData: 'https://www.linkedin.com/in/niekdewit/'
      },
      {
        label: _labels.address,
        value: language === 'en' ? ADDRESS_EN : ADDRESS_NL,
        display: 'plain'
      },
      {
        label: _labels.phone,
        value: _labels.onRequest,
        display: 'plain'
      },
      {
        label: _labels.taxNumber,
        value: '...',
        display: 'plain'
      },
      {
        label: _labels.kvkNumber,
        value: '...',
        display: 'plain'
      },
    ];
  }
}