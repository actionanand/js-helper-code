import { Status } from './objChain.model';

export const data = {
  preferences: {
    consent: false,
    email: 'rajesh@ar.com',
    daily_alert_status: Status.ConsentNotGivenYet,
    special_alert_status: Status.OptedIn,
    daily: {
      dual: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },
      high_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true },
      low_priority: { filter: 'utm=facebook', query: '', type: 'standard', status: false },
    },
    special: {
      dual: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true },
      high_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },
      low_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },
    },
  },
};
