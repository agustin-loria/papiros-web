import type {
  Category, Pillar, Sector, Review, ReviewFull,
  FilterCategory, Product, Spec, RelatedProduct, Generation, RatingBar
} from './types';

export const categories: Category[] = [
  { nombre: "Vasos de papel", detalle: "de 120 a 500 cc, lisos e impresos" },
  { nombre: "Vasos y copas plásticas", detalle: "PP, PET y cristal" },
  { nombre: "Sorbetes", detalle: "papel, plástico y compostables" },
  { nombre: "Cubiertos", detalle: "sueltos, en kit y enfundados" },
  { nombre: "Bandejas", detalle: "cartón, plástico y espuma" },
  { nombre: "Aluminio", detalle: "budineras, rollos y semi-rígidos" },
  { nombre: "Servilletas y papel", detalle: "bobinas, rollos y toallas" },
  { nombre: "Film y bolsas", detalle: "film, bolsas de arranque y camiseta" },
];

export const pillars: Pillar[] = [
  { num: "01", titulo: "Tu lista, de memoria", texto: "Guardamos el consumo de cada cocina. Cuando toca reponer, ya sabemos qué llevar y cuánto." },
  { num: "02", titulo: "Stock propio, sin intermediarios", texto: "Depósito propio en zona norte. Lo que está en el catálogo sale hoy, no cuando llegue el contenedor." },
  { num: "03", titulo: "Te decimos qué envase conviene", texto: "Cuarenta años viendo qué aguanta un guiso, qué transpira y qué se dobla en el delivery." },
  { num: "04", titulo: "Hablás con la familia", texto: "Tres generaciones atendiendo el teléfono. Ningún cliente pasa por un call center." },
];

export const sectors: Sector[] = [
  { titulo: "Restaurantes y bares", texto: "Reposición semanal, take away y delivery. Bultos cerrados y entrega en el horario que no te complica el servicio.", link: "Ver productos para gastronomía", foto: "salón" },
  { titulo: "Hoteles", texto: "Amenities de desayuno, room service y áreas de personal. Volúmenes grandes con precio acordado por temporada.", link: "Ver productos para hotelería", foto: "desayunador" },
  { titulo: "Eventos y catering", texto: "Cotización por evento, entrega en el lugar y retiro de lo que no se usó. Coordinamos con fecha y horario fijo.", link: "Cotizar un evento", foto: "catering" },
];

export const homeReviews: Review[] = [
  { texto: "Nos abastecen desde que abrimos. Pedís por WhatsApp a la mañana y al otro día está en la puerta. Nunca nos dejaron sin vasos un fin de semana.", inicial: "MG", nombre: "Martín G.", negocio: "Parrilla en San Isidro" },
  { texto: "Lo que más valoro es que te asesoran. Cambiamos la bandeja del delivery por una que recomendaron ellos y bajaron los reclamos.", inicial: "LP", nombre: "Lucía P.", negocio: "Cocina de autor, Vicente López" },
  { texto: "Trabajamos con ellos para eventos de 400 cubiertos. Cumplen con la fecha y facturan como corresponde.", inicial: "DR", nombre: "Diego R.", negocio: "Catering, CABA" },
];

export const filterCategories: FilterCategory[] = [
  { nombre: "Vasos de papel", n: 42 }, { nombre: "Vasos plásticos", n: 38 },
  { nombre: "Sorbetes", n: 14 }, { nombre: "Cubiertos", n: 26 },
  { nombre: "Bandejas", n: 51 }, { nombre: "Aluminio", n: 33 },
  { nombre: "Servilletas y papel", n: 47 }, { nombre: "Film y bolsas", n: 29 },
];

export const products: Product[] = [
  { codigo: "VP-240", nombre: "Vaso de papel 240 cc", bulto: "1.000 u. por bulto", destacado: true },
  { codigo: "VP-360", nombre: "Vaso de papel 360 cc", bulto: "1.000 u. por bulto", destacado: false },
  { codigo: "VP-120", nombre: "Vaso café 120 cc", bulto: "2.000 u. por bulto", destacado: false },
  { codigo: "VP-500", nombre: "Vaso de papel 500 cc", bulto: "800 u. por bulto", destacado: false },
  { codigo: "VP-T80", nombre: "Tapa plástica Ø 80 mm", bulto: "1.000 u. por bulto", destacado: true },
  { codigo: "VP-CMP", nombre: "Vaso compostable 300 cc", bulto: "1.000 u. por bulto", destacado: false },
];

export const specs: Spec[] = [
  { k: "Capacidad", v: "240 cc" }, { k: "Material", v: "Cartón 250 g" },
  { k: "Diámetro boca", v: "80 mm" }, { k: "Unidades por bulto", v: "1.000" },
  { k: "Uso", v: "Frío y caliente hasta 85 °C" }, { k: "Tapa compatible", v: "Ø 80 mm (cód. VP-T80)" },
];

export const relatedProducts: RelatedProduct[] = [
  { nombre: "Tapa plástica Ø 80 mm", bulto: "1.000 u." },
  { nombre: "Removedor de madera", bulto: "5.000 u." },
  { nombre: "Servilleta 30×30", bulto: "4.000 u." },
  { nombre: "Portavasos de cartón x4", bulto: "500 u." },
];

export const generations: Generation[] = [
  { anio: "1986", titulo: "Una camioneta y una libreta", texto: "La fundadora arranca repartiendo servilletas y bobinas a los bares de zona norte, cliente por cliente." },
  { anio: "2004", titulo: "Depósito propio", texto: "La segunda generación suma depósito, flota y las primeras cuentas de hotelería." },
  { anio: "Hoy", titulo: "Catálogo y reposición", texto: "La tercera generación digitaliza el catálogo y el historial de cada cliente, con la misma atención de siempre." },
];

export const ratingBars: RatingBar[] = [
  { n: 5, pct: "86%", c: 110 }, { n: 4, pct: "10%", c: 13 },
  { n: 3, pct: "3%", c: 4 }, { n: 2, pct: "1%", c: 1 }, { n: 1, pct: "0%", c: 0 },
];

export const fullReviews: ReviewFull[] = [
  { inicial: "MG", nombre: "Martín G.", negocio: "Parrilla en San Isidro", fecha: "hace 2 semanas", estrellas: "★★★★★", texto: "Nos abastecen desde que abrimos. Pedís por WhatsApp a la mañana y al otro día está en la puerta. Nunca nos dejaron sin vasos un fin de semana.", respuesta: "Gracias Martín. Seguimos con la lista de siempre lista para reponer." },
  { inicial: "LP", nombre: "Lucía P.", negocio: "Cocina de autor, Vicente López", fecha: "hace 1 mes", estrellas: "★★★★★", texto: "Lo que más valoro es que te asesoran. Cambiamos la bandeja del delivery por una que recomendaron ellos y bajaron los reclamos.", respuesta: false },
  { inicial: "DR", nombre: "Diego R.", negocio: "Catering, CABA", fecha: "hace 2 meses", estrellas: "★★★★★", texto: "Trabajamos con ellos para eventos de 400 cubiertos. Cumplen con la fecha y facturan como corresponde.", respuesta: false },
  { inicial: "SC", nombre: "Sofía C.", negocio: "Hotel boutique, Tigre", fecha: "hace 3 meses", estrellas: "★★★★", texto: "Muy buena atención y precios de mayorista de verdad. Una sola vez tuvimos una demora en temporada alta y la resolvieron al día siguiente.", respuesta: "Gracias por la paciencia, Sofía. Ampliamos el stock de temporada por ese motivo." },
];

export const WHATSAPP_NUMBER = "5491155555555";
export const EMAIL = "ventas@papirosnorte.com.ar";
