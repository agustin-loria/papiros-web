import { filterCategories } from '../../lib/data';

const MATERIALS = ['Papel / cartón', 'Plástico', 'Aluminio', 'Compostable'];
const USES = ['Delivery y take away', 'Salón', 'Cocina', 'Eventos'];

interface Props {
  activeCategory?: string;
}

export default function Filters({ activeCategory }: Props) {
  return (
    <aside className="filters">
      <div className="filter-group">
        <span className="filter-label">Categoría</span>
        {filterCategories.map(f => (
          <a
            key={f.nombre}
            href={`/catalog?cat=${encodeURIComponent(f.nombre)}`}
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
      `}</style>
    </aside>
  );
}
