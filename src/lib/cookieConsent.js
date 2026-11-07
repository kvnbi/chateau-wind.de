
export const CONSENT_STORAGE_KEY = 'chateau_cookie_consent';
export const CONSENT_VERSION = 2;
export const CONSENT_EVENT = 'chateau:cookie-consent-changed';
export const OPEN_SETTINGS_EVENT = 'chateau:open-cookie-settings';

export const DEFAULT_CONSENT = { necessary: true, analytics: false, marketing: false };

export function getConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || parsed.version !== CONSENT_VERSION) return null;
    return { ...DEFAULT_CONSENT, ...parsed.categories, necessary: true };
  } catch {
    return null;
  }
}

export function hasConsent(category) {
  const consent = getConsent();
  if (!consent) return category === 'necessary';
  return !!consent[category];
}

export function saveConsent(categories) {
  const payload = {
    version: CONSENT_VERSION,
    date: new Date().toISOString(),
    categories: { ...DEFAULT_CONSENT, ...categories, necessary: true },
  };
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(payload));
  } catch {
  }
  try {
    window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: payload.categories }));
  } catch {
  }
  return payload.categories;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}