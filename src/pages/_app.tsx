import '@/styles/globals.css';
import '@/styles/RichTextEditor.css';
import '@/styles/MinimalTextEditor.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
