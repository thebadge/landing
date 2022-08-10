import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GA_MEASUREMENT_ID } from '@/src/constants';

const pageview = (url: string) => {
  // @ts-ignore
  if (window.gtag) {
    // @ts-ignore
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    });
  }
};

export const useGoogleAnalytics = () => {
  const router = useRouter();

  useEffect(() => {
    return () => {
      pageview(router.route);
    };
  }, [router.route]);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      pageview(url);
    };

    // When the component is mounted, subscribe to router changes
    // and log those page views
    router.events.on('routeChangeComplete', handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);
};

// @todo (agustin) modify and add this to useGoogleAnalytics
export const useGoogleAnalyticsBtn = () => {
  const btnEvent = (event: string) => {
    // @ts-ignore
    if (window.gtag) {
      // @ts-ignore
      window.gtag('event', 'click', {
        event_category: 'Click',
        event_label: event,
      });
    }
  };

  return btnEvent
};
