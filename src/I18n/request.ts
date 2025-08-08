
import {getRequestConfig} from 'next-intl/server';

export default getRequestConfig(async () => {
  const locale = 'en'; // default fallback, can read from cookie later
  return {
    locale,
    messages: (await import(`../message/${locale}.json`)).default
  };
});
