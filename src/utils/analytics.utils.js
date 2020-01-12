import ReactGA from 'react-ga';

export const logPageView = () => {
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname);
    ReactGA.ga('GoogleAdsTracker.send', 'pageview', {'page': window.location.pathname});
    return null;
};