
import { getConsent, hasConsent, CONSENT_EVENT } from '@/lib/cookieConsent';

function pushConsentMode(analytics, marketing) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'consent_update',
    analytics_storage: analytics ? 'granted' : 'denied',
    ad_storage: marketing ? 'granted' : 'denied',
  });
}

function apply() {
  const consent = getConsent();
  pushConsentMode(!!consent && hasConsent('analytics'), !!consent && hasConsent('marketing'));
}

let started = false;

export function initConsentEnforcer() {
  if (started || typeof window === 'undefined') return;
  started = true;
  apply();
  window.addEventListener(CONSENT_EVENT, apply);
}