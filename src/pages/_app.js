import DefaultLayout from '@/layout/DefaultLayout';
import '@/styles/globals.css';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
  const router = useRouter();

  // Daftar halaman yang menggunakan DefaultLayout
  const layoutNeeded = ['/dashboard'].includes(router.pathname);

  return layoutNeeded ? (
    <DefaultLayout>
      <Component {...pageProps} />
    </DefaultLayout>
  ) : (
    <Component {...pageProps} />
  );
}
