This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Testing

run the test using this command 

```bash
npx playwright test

```
Tests are run in headless mode meaning no browser will open up when running the tests. Results of the tests and test logs will be shown in the terminal.

Run your tests with UI Mode 
```bash
npx playwright test --ui

```

Test Reports

```bash
npx playwright show-report

```
Running a single test file

```bash
npx playwright test landing-page.spec.ts

```

you can check playwright docs running tests
[here](https://playwright.dev/docs/running-tests)

## I18next Configuration

-i18n.js - Contains the i18next configuration settings.

-locales/ - Directory containing translation files for each supported language.

en/ - English translations (example: common.json, page1.json, etc.).
ar/ - arabic translations (example: common.json, page1.json, etc.).
Add more language directories as needed.

- You can also add files for each page you want in the ar/en folders 

├── locales/
  │   │   ├── en/
  │   │   │   ├── common.json
  │   │   │   ├── header.json
  │   │   │   └── footer.json
  │   │   ├── ar/
  │   │   │   ├── common.json
  │   │   │   ├── header.json
  │   │   │   └── footer.json
  │   │   |

  
  - When you add new file you should import it in the place you are using in the getStaticProps and in the useTranslation ( it should be written as an array [] )

  const { t} = useTranslation(['common','header','footer'])
  export const getStaticProps: GetStaticProps = async ({
  locale,
}) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'common','header','footer'
    ])),
  },
})

-Use i18next's useTranslation hook to access translations in your components

const { t, i18n } = useTranslation('common')

-When you have nested json file  for example this json :
{
    "header": {
    "home": "Home",
    "about": "About",
    "contact": "Contact",
    "language": "Language",
    "selectLanguage": "Select Language"
  },
}

 you are goinig to call it for translation like this 
  <h1>{t('header.home')}</h1>

-Use understanable words and sentences for the tranlations files 