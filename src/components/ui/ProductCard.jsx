import { Link } from 'react-router-dom';
import FinishBadges from './FinishBadges';

export default function ProductCard({ product, variant = 'light', label }) {
  const isDark = variant === 'dark';

  const cardStyle = isDark
    ? { background: '#303030', border: '1px solid rgba(255,255,255,0.12)' }
    : { background: '#ffffff', border: '1px solid #e4dccb' };

  const titleColor = isDark ? '#ffffff' : '#202020';
  const descColor = isDark ? '#d0d0d0' : '#686868';
  const labelColor = '#c7a24a';

  return (
    <Link to={`/modelle/${product.slug}`} className="block no-underline group" style={{ textDecoration: 'none' }}>
      <div style={cardStyle} className="h-full flex flex-col transition-all duration-200">
        <div className="flex items-center justify-center" style={{ background: isDark ? '#eee7d8' : '#f5f1e8', height: '310px', padding: '24px' }}>
          <img
            src={product.image}
            alt={product.fullName}
            className="max-h-full max-w-full"
            style={{ objectFit: 'contain', mixBlendMode: 'multiply' }}
          />
        </div>
        <div className="flex flex-col flex-1" style={{ padding: '22px' }}>
          <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.16em', color: labelColor, marginBottom: '6px' }}>
            {label || product.instrumentType}
          </div>
          <h3 className="font-heading" style={{ fontSize: '26px', fontWeight: 400, color: titleColor, marginBottom: '8px' }}>
            {product.name}
          </h3>
          <p style={{ fontSize: '14px', color: descColor, lineHeight: 1.55, marginBottom: '16px' }}>
            {product.shortDesc}
          </p>
          <FinishBadges baseModel={product.name} finishes={product.finishes} variant={variant} />
        </div>
      </div>
    </Link>
  );
}