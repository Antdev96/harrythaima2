export const SERVICES = [
  { id: "thai", duration: "60min", price: "50€", popular: true },
  { id: "ayurvedic", duration: "60min", price: "65€", popular: false },
  { id: "pindas", duration: "60min", price: "65€", popular: false },
  { id: "relajante", duration: "60min", price: "50€", popular: false },
  { id: "deportivo", duration: "60min", price: "50€", popular: false },
  { id: "4-manos", duration: "60min", price: "95€", popular: true },
  { id: "reflexologia", duration: "45min", price: "40€", popular: false },
];

export const FOCUSED_SERVICES = [
  { id: "30-min", duration: "30min", price: "30€" },
  { id: "facial", duration: "30min", price: "30€" },
  { id: "hombros", duration: "20min", price: "25€" },
  { id: "cuello", duration: "20min", price: "25€" },
  { id: "espalda", duration: "30min", price: "35€" },
  { id: "piernas", duration: "30min", price: "30€" },
  { id: "pies", duration: "20min", price: "25€" },
];

export const BONOS = [
  { id: 1, serviceName: "Masaje Thai", originalPrice: 250, bonoPrice: 225 },
  { id: 2, serviceName: "Masaje Relajante", originalPrice: 225, bonoPrice: 200 },
  { id: 3, serviceName: "Masaje Deportivo", originalPrice: 250, bonoPrice: 225 },
  { id: 4, serviceName: "Reflexología Podal", originalPrice: 200, bonoPrice: 175 },
];

export const PRICING_CATEGORIES = [
  {
    key: "individual",
    title: { es: "Individual", en: "Individual" },
    items: [
      { label: "30 min", price: "30€" },
      { label: "60 min", price: "50€" },
      { label: "90 min", price: "75€" },
    ],
  },
  {
    key: "couples",
    title: { es: "Parejas", en: "Couples" },
    items: [
      { label: "30 min", price: "55€" },
      { label: "60 min", price: "95€" },
      { label: "90 min", price: "145€" },
    ],
  },
  {
    key: "ayurvedic",
    title: { es: "Ayurvedic masaje", en: "Ayurvedic massage" },
    items: [
      { label: "60 min", price: "65€" },
      { label: "90 min", price: "85€" },
    ],
  },
  {
    key: "pinda",
    title: { es: "Pinda cliente", en: "Pinda" },
    items: [
      { label: "30 min", price: "35€" },
      { label: "60 min", price: "65€" },
    ],
  },
];
