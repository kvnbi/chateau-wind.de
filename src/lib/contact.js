export const CONTACT_EMAIL = 'info@chateau-saxophone.de';

export function mailtoLink(subject, body) {
  const params = [];
  if (subject) params.push(`subject=${encodeURIComponent(subject)}`);
  if (body) params.push(`body=${encodeURIComponent(body)}`);
  return `mailto:${CONTACT_EMAIL}${params.length ? `?${params.join('&')}` : ''}`;
}
