import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = 'G-BQSX9D3LMP';

export const initGA = (): void => {
  // Check for production environment and if the GA ID exists
  if (GA_MEASUREMENT_ID && process.env.NODE_ENV === 'production') {
    ReactGA.initialize(GA_MEASUREMENT_ID);
  }
};

export const logPageView = (): void => {
  // Check for production environment and if the GA ID exists
  if (GA_MEASUREMENT_ID && process.env.NODE_ENV === 'production') {
    ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
  }
};

// Note the explicit types for the event parameters
export const logEvent = (category: string, action: string, label?: string): void => {
  // Check for production environment and if the GA ID exists
  if (GA_MEASUREMENT_ID && process.env.NODE_ENV === 'production') {
    ReactGA.event({ category, action, label });
  }
};
