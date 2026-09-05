import { useStore } from '@nanostores/react';
import { useEffect, useState } from 'react';
import { cartItems, cartCount, updateQty, removeItem, buildWhatsAppUrl, hydrate } from '../../store/cart';

const PHONE = "5491155555555";

export default function CartButton() {
  const count = useStore(cartCount);
  const items = useStore(cartItems);
  const [open, setOpen] = useState(false);

  useEffect(() => { hydrate(); }, []);

  return (
    <>
      <button className="cart-btn" onClick={() => setOpen(true)} aria-label="Mi consulta">
        <svg className="cart-btn-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128" role="img" aria-label="Papiros Norte" xmlns:c2pa="http://c2pa.org/manifest">
          <g transform="translate(64 64) rotate(15) scale(0.92) translate(-69 -70)" fill="none" stroke="#23272C" stroke-linecap="round" stroke-linejoin="round">
            <path d="M104 22H90V102H34" stroke-width="9"/>
            <circle cx="92" cy="112" r="8" stroke-width="8"/>
            <rect x="40" y="44" width="44" height="52" rx="4" stroke-width="9"/>
            <path d="M40 57H84" stroke-width="7"/>
            <path d="M50 88V66h7a6 6 0 0 1 0 12H50" stroke-width="7"/>
            <path d="M66 88V66l10 22V66" stroke-width="7"/>
          </g>
        </svg>
        <span className="cart-btn-text">Mi consulta</span>
        <span className="cart-badge">{count}</span>
      </button>

      {open && (
        <div className="cart-overlay" onClick={() => setOpen(false)}>
          <div className="cart-drawer" onClick={e => e.stopPropagation()}>
            <div className="cart-drawer-header">
              <span className="cart-drawer-title">Mi consulta</span>
              <button className="cart-close" onClick={() => setOpen(false)}>✕</button>
            </div>

            {items.length === 0 ? (
              <div className="cart-empty">
                <p>Tu consulta está vacía.</p>
                <p>Agregá productos desde el catálogo.</p>
              </div>
            ) : (
              <>
                <div className="cart-items">
                  {items.map(item => (
                    <div key={item.code} className="cart-item">
                      <div className="cart-item-photo photo-placeholder">FOTO</div>
                      <div className="cart-item-info">
                        <span className="cart-item-name">{item.nombre}</span>
                        <span className="cart-item-bulto">{item.bulto}</span>
                      </div>
                      <div className="qty-control">
                        <button onClick={() => updateQty(item.code, item.qty - 1)}>−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.code, item.qty + 1)}>+</button>
                      </div>
                      <button className="cart-remove" onClick={() => removeItem(item.code)}>✕</button>
                    </div>
                  ))}
                </div>
                <div className="cart-drawer-footer">
                  <a
                    href={buildWhatsAppUrl(PHONE)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-whatsapp"
                  >
                    Enviar por WhatsApp
                  </a>
                  <p className="cart-footer-note">
                    Se abre WhatsApp con tu lista ya escrita. Te confirmamos precios y stock el mismo día.
                  </p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      <style>{`
        .cart-btn {
          display: flex;
          align-items: center;
          gap: 0;
          padding: 9px 8px 9px 6px;
          border: 1.5px solid var(--color-charcoal);
          color: var(--color-charcoal);
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 14px;
          background: transparent;
          cursor: pointer;
          height: 100%;
          min-width: 62px;
        }
        .cart-btn-logo {
          width: 28px;
          height: 28px;
        }
        .cart-btn-text {
          display: none;
        }
        @media (min-width: 640px) {
          .cart-btn-logo { display: none; }
          .cart-btn-text { display: inline; }
          .cart-btn {
            gap: 8px;
            padding: 9px 16px;
          }
        }
        .cart-badge {
          background: var(--color-green);
          color: #fff;
          width: 21px;
          height: 21px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          font-size: 12px;
        }
        .cart-overlay {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,.4);
          z-index: 100;
        }
        .cart-drawer {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 420px;
          max-width: 100vw;
          background: #fff;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .cart-drawer-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px 24px;
          border-bottom: 1px solid var(--color-border);
        }
        .cart-drawer-title {
          font-size: 18px;
          font-weight: 700;
          color: var(--color-charcoal);
        }
        .cart-close {
          font-size: 18px;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .cart-empty {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          color: var(--color-text-muted);
          font-size: 15px;
          padding: 40px;
          text-align: center;
        }
        .cart-items {
          flex: 1;
          overflow-y: auto;
        }
        .cart-item {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 24px;
          border-bottom: 1px solid #EDEAE4;
        }
        .cart-item-photo {
          width: 56px;
          height: 56px;
          flex-shrink: 0;
          font-size: 9px;
        }
        .cart-item-info {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 3px;
        }
        .cart-item-name {
          font-size: 14px;
          font-weight: 700;
          color: var(--color-charcoal);
          line-height: 1.3;
        }
        .cart-item-bulto {
          font-size: 12px;
          color: var(--color-text-muted);
        }
        .qty-control {
          display: flex;
          align-items: center;
          border: 1px solid var(--color-border);
        }
        .qty-control button {
          width: 30px;
          height: 34px;
          display: grid;
          place-items: center;
          color: var(--color-text-muted);
          font-size: 16px;
          background: none;
          border: none;
          cursor: pointer;
        }
        .qty-control span {
          width: 28px;
          text-align: center;
          font-size: 14px;
          font-weight: 700;
          color: var(--color-charcoal);
        }
        .cart-remove {
          font-size: 13px;
          color: var(--color-text-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
        }
        .cart-drawer-footer {
          padding: 20px 24px;
          border-top: 1px solid var(--color-border);
          background: var(--color-beige);
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .btn-whatsapp {
          display: block;
          padding: 16px;
          background: var(--color-green);
          color: #fff;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          text-decoration: none;
        }
        .btn-whatsapp:hover {
          background: var(--color-green-hover);
          color: #fff;
        }
        .cart-footer-note {
          font-size: 12px;
          color: var(--color-text-muted);
          text-align: center;
          line-height: 1.5;
        }
      `}</style>
    </>
  );
}
