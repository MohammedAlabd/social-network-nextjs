import 'i18next';
import resources from './resources.ts';

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: typeof resources;
  }
}
