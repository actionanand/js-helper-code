# Object Chain into Array

```ts
const pref: Subscription = {
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
};
```

```ts
const arrayVal: [string, SubscriptionList][] = Object.entries(pref).filter(val => {
  return val[0] === 'daily' || val[0] === 'special';
});
```

Output format is : `[string, Object][]`, here `Object` type is `SubscriptionList`

```js
[
  [
    'daily',
    {
      dual: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },
      high_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true },
      low_priority: { filter: 'utm=facebook', query: '', type: 'standard', status: false },
    },
  ],
  [
    'special',
    {
      dual: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true },
      high_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },
      low_priority: { filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: false },
    },
  ],
];
```

Let see the main logic loop:

```ts
const temp: ProcessedList[] = [];

arrayVal.forEach(val => {
  const category = val[0];
  for (const key in val[1]) {
    const unique = `${val[0]}_${key}`;
    const obj: ProcessedList = { category, subscription: key, unique, index: index, ...pref[val[0]][key] };
    temp.push(obj);
    index++;
  }
});
```

breakthrough of the above code

1. `val` will iterate over array of `arrayVal`. Here `arrayVal` is like `[[array1], [array2]]`. `val` is either `array1` or `array2`. And inner array has the type of `[string, Object]`, here `[string, SubscriptionList]`
2. so `val[0]` will be always `string`. And here `string` will be either `daily` or `special`.
3. And `val[1]` will be an object, here its type is `SubscriptionList`.
4. `const key in val[1]` will give the array which contains the keys of object `SubscriptionList`. here `dual`, `high_priority` and `low_priority`.
5. So basically here, `val[0]` is one of the keys of object `pref` (its type is `Subscription`) and `key` is one of the keys of the object containing keys `val[0]` (i.e, keys of the object either `daily` or `special`).
6. So refereing both the keys. key of object and key of object's key (inner object) will give the output like this `{ filter: 'utm=facebook', query: 'newsletter', type: 'standard', status: true }`
7. `pref[val[0]][key]` will be like `pref['daily']['dual']` (this is an example)
8. See the final output as below: The final output type is `Object[]`, here `ProcessedList[]`

```js
[
  {
    category: 'daily',
    subscription: 'dual',
    unique: 'daily_dual',
    index: 0,
    filter: 'utm=facebook',
    query: 'newsletter',
    type: 'standard',
    status: false,
  },
  {
    category: 'daily',
    subscription: 'high_priority',
    unique: 'daily_high_priority',
    index: 1,
    filter: 'utm=facebook',
    query: 'newsletter',
    type: 'standard',
    status: true,
  },
  {
    category: 'daily',
    subscription: 'low_priority',
    unique: 'daily_low_priority',
    index: 2,
    filter: 'utm=facebook',
    query: '',
    type: 'standard',
    status: false,
  },
  {
    category: 'special',
    subscription: 'dual',
    unique: 'special_dual',
    index: 3,
    filter: 'utm=facebook',
    query: 'newsletter',
    type: 'standard',
    status: true,
  },
  {
    category: 'special',
    subscription: 'high_priority',
    unique: 'special_high_priority',
    index: 4,
    filter: 'utm=facebook',
    query: 'newsletter',
    type: 'standard',
    status: false,
  },
  {
    category: 'special',
    subscription: 'low_priority',
    unique: 'special_low_priority',
    index: 5,
    filter: 'utm=facebook',
    query: 'newsletter',
    type: 'standard',
    status: false,
  },
];
```

## Resources

1. [Element implicitly has an 'any' type because expression of type 'string' can't be used to index type](https://bobbyhadz.com/blog/typescript-element-implicitly-has-any-type-expression)
2. [Element implicitly has an 'any' type because expression of type 'string' can't be used to index - stackoverflow](https://stackoverflow.com/questions/57086672/element-implicitly-has-an-any-type-because-expression-of-type-string-cant-b)
