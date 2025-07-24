import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-BQSX9D3LMP';

export const initGA = (): void => {
  // Check for production environment
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const logPageView = (): void => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }
};

// Note the explicit types for the event parameters
export const logEvent = (category: string, action: string, label?: string): void => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.event({ category, action, label });
  }
};
