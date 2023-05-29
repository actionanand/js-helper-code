/* eslint-disable @typescript-eslint/consistent-type-definitions */
export class MyPreference {
  preferences!: Subscription;
}

export class Subscription {
  consent!: boolean;
  email!: string;
  daily_alert_status!: Status;
  special_alert_status!: Status;
  daily!: {
    dual: SubscriptionList;
    high_priority: SubscriptionList;
    low_priority: SubscriptionList;
  };
  special?: {
    dual: SubscriptionList;
    high_priority: SubscriptionList;
    low_priority: SubscriptionList;
  };
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface SubscriptionList {
  filter: string;
  query: string;
  type: string;
  status: boolean;
}

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export interface ProcessedList extends SubscriptionList {
  category: string;
  subscription: string;
  unique: string;
  index: number;
}

export enum Status {
  OptedIn = 'OptedIn',
  OptedOut = 'OptedOut',
  ConsentNotGivenYet = 'ConsentNotGivenYet',
}
