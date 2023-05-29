import { data } from './data';
import { ProcessedList, Subscription, SubscriptionList } from './objChain.model';

export const objChainIntoArray = () => {
  const pref: Subscription = data.preferences;
  let subscriptionArray: ProcessedList[] = [];

  const temp: ProcessedList[] = [];

  const arrayVal: [string, SubscriptionList][] = Object.entries(pref).filter(val => {
    return val[0] === 'daily' || val[0] === 'special';
  });

  let index = 0;

  arrayVal.forEach(val => {
    const category = val[0];
    for (const key in val[1]) {
      const unique = `${val[0]}_${key}`;
      const obj: ProcessedList = { category, subscription: key, unique, index: index, ...pref[val[0]][key] };
      temp.push(obj);
      index++;
    }
  });

  subscriptionArray = temp;
  console.log('Subscription Array: ', subscriptionArray);
};
