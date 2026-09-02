export interface Category {
  nombre: string;
  detalle: string;
}

export interface Pillar {
  num: string;
  titulo: string;
  texto: string;
}

export interface Sector {
  titulo: string;
  texto: string;
  link: string;
  foto: string;
}

export interface Review {
  inicial: string;
  nombre: string;
  negocio: string;
  texto: string;
}

export interface ReviewFull {
  inicial: string;
  nombre: string;
  negocio: string;
  fecha: string;
  estrellas: string;
  texto: string;
  respuesta: string | false;
}

export interface FilterCategory {
  nombre: string;
  n: number;
}

export interface Product {
  codigo: string;
  nombre: string;
  bulto: string;
  destacado: boolean;
}

export interface Spec {
  k: string;
  v: string;
}

export interface RelatedProduct {
  nombre: string;
  bulto: string;
}

export interface Generation {
  anio: string;
  titulo: string;
  texto: string;
}

export interface RatingBar {
  n: number;
  pct: string;
  c: number;
}

export interface CartItem {
  code: string;
  nombre: string;
  bulto: string;
  qty: number;
}
