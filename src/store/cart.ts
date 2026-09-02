import { atom, computed } from 'nanostores';
import type { CartItem } from '../lib/types';

export const cartItems = atom<CartItem[]>([]);

export const cartCount = computed(cartItems, items =>
  items.reduce((sum, item) => sum + item.qty, 0)
);

export function addItem(item: Omit<CartItem, 'qty'>) {
  const current = cartItems.get();
  const existing = current.find(i => i.code === item.code);
  if (existing) {
    cartItems.set(current.map(i =>
      i.code === item.code ? { ...i, qty: i.qty + 1 } : i
    ));
  } else {
    cartItems.set([...current, { ...item, qty: 1 }]);
  }
  persist();
}

export function updateQty(code: string, qty: number) {
  if (qty <= 0) {
    removeItem(code);
    return;
  }
  cartItems.set(cartItems.get().map(i =>
    i.code === code ? { ...i, qty } : i
  ));
  persist();
}

export function removeItem(code: string) {
  cartItems.set(cartItems.get().filter(i => i.code !== code));
  persist();
}

export function buildWhatsAppUrl(phone: string): string {
  const items = cartItems.get();
  if (items.length === 0) return `https://wa.me/${phone}`;
  const lines = items.map(i => `• ${i.nombre} (${i.bulto}) × ${i.qty}`).join('\n');
  const text = `Hola, me gustaría solicitar presupuesto para:\n\n${lines}\n\nQuedo a la espera. ¡Gracias!`;
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
}

function persist() {
  if (typeof localStorage !== 'undefined') {
    localStorage.setItem('papiros-cart', JSON.stringify(cartItems.get()));
  }
}

export function hydrate() {
  if (typeof localStorage !== 'undefined') {
    const saved = localStorage.getItem('papiros-cart');
    if (saved) {
      try { cartItems.set(JSON.parse(saved)); } catch {}
    }
  }
}
