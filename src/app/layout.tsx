
import './globals.css';
import {NextIntlClientProvider} from 'next-intl';


import {cookies} from 'next/headers';
import {Geist, Geist_Mono} from "next/font/google";
import LanguageSelector from '@/components/LanguageSelector';

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  title: 'TODO LIST',
  description: 'Localized App',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // get language from cookies
 
const cookieStore = await cookies();
const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';



  const messages = (await import(`@/message/${locale}.json`)).default;

  return (
    <html lang={locale}>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NextIntlClientProvider locale={locale} messages={messages} >
          <LanguageSelector />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
