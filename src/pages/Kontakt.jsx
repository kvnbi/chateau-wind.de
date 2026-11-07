import GoldButton from '../components/ui/GoldButton';
import { CONTACT_EMAIL, mailtoLink } from '@/lib/contact';

export default function Kontakt() {
  return (
    <div style={{ background: '#f5f1e8' }}>
      <section style={{ background: '#252525', padding: 'clamp(52px,8vw,78px) 24px clamp(36px,5vw,52px)' }}>
        <div className="max-w-[1180px] mx-auto">
          <h1 className="font-heading" style={{ fontSize: 'clamp(36px, 5vw, 56px)', lineHeight: 1.08, fontWeight: 400, color: '#ffffff' }}>
            Kontakt
          </h1>
        </div>
      </section>
      <div className="max-w-[960px] mx-auto" style={{ padding: 'clamp(36px,6vw,52px) clamp(18px,3vw,28px) clamp(56px,8vw,78px)' }}>
        <div style={{ background: '#ffffff', border: '1px solid #ddd3bf', padding: 'clamp(24px,4vw,36px)', maxWidth: '640px', margin: '0 auto' }}>
          <a
            href={mailtoLink()}
            className="font-heading"
            style={{ display: 'block', fontSize: 'clamp(22px,4vw,30px)', color: '#202020', textDecoration: 'none', marginBottom: '24px' }}
          >
            {CONTACT_EMAIL}
          </a>
          <GoldButton href={mailtoLink()}>E-Mail schreiben</GoldButton>
        </div>
      </div>
    </div>
  );
}
