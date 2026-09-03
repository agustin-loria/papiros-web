import { useState } from 'react';
import { filterCategories } from '../../lib/data';

const MATERIALS = ['Papel / cartón', 'Plástico', 'Aluminio', 'Compostable'];
const USES = ['Delivery y take away', 'Salón', 'Cocina', 'Eventos'];

interface Props {
  activeCategory?: string;
  base?: string;
}

export default function Filters({ activeCategory, base = '/' }: Props) {
  const [open, setOpen] = useState(false);

  const filterInner = (
    <>
      <div className="filter-group">
        <span className="filter-label">Categoría</span>
        {filterCategories.map(f => (
          <a
            key={f.nombre}
            href={`${base}catalog?cat=${encodeURIComponent(f.nombre)}`}
            className={`filter-item ${activeCategory === f.nombre ? 'active' : ''}`}
          >
            <span>{f.nombre}</span>
            <span className="filter-count">{f.n}</span>
          </a>
        ))}
      </div>

      <div className="filter-group filter-group--border">
        <span className="filter-label">Material</span>
        {MATERIALS.map(m => (
          <span key={m} className="filter-item">{m}</span>
        ))}
      </div>

      <div className="filter-group filter-group--border">
        <span className="filter-label">Uso</span>
        {USES.map(u => (
          <span key={u} className="filter-item">{u}</span>
        ))}
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar — hidden on mobile via CSS */}
      <aside className="filters">
        {filterInner}
      </aside>

      {/* Mobile button + collapsible panel — hidden on desktop via CSS */}
      <div className="filters-mobile">
        <button className="filter-toggle" onClick={() => setOpen(o => !o)}>
          <span>Filtrar</span>
          <span className={`filter-chevron${open ? ' open' : ''}`}>▾</span>
        </button>
        <div className={`filter-panel${open ? ' open' : ''}`}>
          <div className="filter-panel-inner">
            {filterInner}
          </div>
        </div>
      </div>

      <style>{`
        .filters {
          border-right: 1px solid var(--color-border);
          padding: 28px 24px;
          display: flex;
          flex-direction: column;
          gap: 26px;
          background: var(--color-beige-light);
        }
        .filter-group {
          display: flex;
          flex-direction: column;
          gap: 11px;
        }
        .filter-group--border {
          border-top: 1px solid var(--color-border);
          padding-top: 22px;
        }
        .filter-label {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--color-charcoal);
          margin-bottom: 2px;
        }
        .filter-item {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #4A5158;
          cursor: pointer;
          text-decoration: none;
        }
        .filter-item:hover {
          color: var(--color-charcoal);
        }
        .filter-item.active {
          font-weight: 700;
          color: var(--color-green);
        }
        .filter-count {
          color: #9AA0A6;
        }

        /* Mobile button+panel */
        .filters-mobile {
          display: none;
        }
        .filter-toggle {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 14px 20px;
          font-size: 14px;
          font-weight: 700;
          background: #fff;
          border: none;
          border-bottom: 1px solid var(--color-border);
          cursor: pointer;
          color: var(--color-charcoal);
          font-family: var(--font-sans);
        }
        .filter-toggle:hover {
          background: var(--color-beige-light);
        }
        .filter-chevron {
          display: inline-block;
          transition: transform .2s;
          font-style: normal;
        }
        .filter-chevron.open {
          transform: rotate(180deg);
        }
        .filter-panel {
          height: 0;
          overflow: hidden;
          transition: height .2s;
        }
        .filter-panel.open {
          height: auto;
        }
        .filter-panel-inner {
          padding: 20px 20px 24px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          background: var(--color-beige-light);
          border-bottom: 1px solid var(--color-border);
        }

        @media (max-width: 899px) {
          .filters {
            display: none;
          }
          .filters-mobile {
            display: block;
          }
        }
      `}</style>
    </>
  );
}
