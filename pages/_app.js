import ThemeContext, {
  ThemeProvider,
} from '../components/context/ThemeContext';
import { useState } from 'react';

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
