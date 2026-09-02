import { useState } from 'react';
import { addItem } from '../../store/cart';

interface Props {
  code: string;
  nombre: string;
  bulto: string;
  unidadesPorBulto: string;
}

export default function AddToInquiry({ code, nombre, bulto, unidadesPorBulto }: Props) {
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    for (let i = 0; i < qty; i++) {
      addItem({ code, nombre, bulto });
    }
  };

  const units = qty * parseInt(unidadesPorBulto.replace(/\D/g, '')) || qty;

  return (
    <div className="add-inquiry">
      <div className="qty-area">
        <div className="qty-control">
          <button onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
          <span>{qty}</span>
          <button onClick={() => setQty(q => q + 1)}>+</button>
        </div>
        <span className="qty-label">
          bultos<br />
          <strong>{units.toLocaleString('es-AR')} unidades</strong>
        </span>
        <button className="btn-add" onClick={handleAdd}>
          Agregar a mi consulta
        </button>
      </div>

      <style>{`
        .add-inquiry {
          padding: 18px;
          background: var(--color-beige);
          border: 1px solid var(--color-border);
        }
        .qty-area {
          display: flex;
          align-items: center;
          gap: 14px;
        }
        .qty-control {
          display: flex;
          align-items: center;
          border: 1px solid #C9C4BA;
          background: #fff;
        }
        .qty-control button {
          width: 40px;
          height: 46px;
          display: grid;
          place-items: center;
          color: var(--color-text-muted);
          font-size: 18px;
          background: none;
          border: none;
          cursor: pointer;
          font-family: var(--font-sans);
        }
        .qty-control button:hover {
          color: var(--color-charcoal);
        }
        .qty-control span {
          width: 44px;
          text-align: center;
          font-size: 16px;
          font-weight: 700;
          color: var(--color-charcoal);
        }
        .qty-label {
          font-size: 13px;
          color: var(--color-text-muted);
          line-height: 1.4;
        }
        .qty-label strong {
          color: var(--color-charcoal);
        }
        .btn-add {
          flex: 1;
          padding: 16px;
          background: var(--color-green);
          color: #fff;
          font-family: var(--font-sans);
          font-weight: 700;
          font-size: 15px;
          text-align: center;
          cursor: pointer;
          border: none;
        }
        .btn-add:hover {
          background: var(--color-green-hover);
        }
      `}</style>
    </div>
  );
}
