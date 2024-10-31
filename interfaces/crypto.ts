export interface Currency {
  coins: Coin[];
  nfts: Nft[];
  categories: Category[];
}

interface Category {
  id: number;
  name: string;
  market_cap_1h_change: number;
  slug: string;
  coins_count: number;
  data: Data3;
}

interface Data3 {
  market_cap: number;
  market_cap_btc: number;
  total_volume: number;
  total_volume_btc: number;
  market_cap_change_percentage_24h: Pricechangepercentage24h;
  sparkline: string;
}

interface Nft {
  id: string;
  name: string;
  symbol: string;
  thumb: string;
  nft_contract_id: number;
  native_currency_symbol: string;
  floor_price_in_native_currency: number;
  floor_price_24h_percentage_change: number;
  data: Data2;
}

interface Data2 {
  floor_price: string;
  floor_price_in_usd_24h_percentage_change: string;
  h24_volume: string;
  h24_average_sale_price: string;
  sparkline: string;
  content: Content | null;
}

export interface Coin {
  item: Item;
}

interface Item {
  id: string;
  coin_id: number;
  name: string;
  symbol: string;
  market_cap_rank: number;
  thumb: string;
  small: string;
  large: string;
  slug: string;
  price_btc: number;
  score: number;
  data: Data;
}

interface Data {
  price: number;
  price_btc: string;
  price_change_percentage_24h: Pricechangepercentage24h;
  market_cap: string;
  market_cap_btc: string;
  total_volume: string;
  total_volume_btc: string;
  sparkline: string;
  content: Content | null;
}

interface Content {
  title: string;
  description: string;
}

interface Pricechangepercentage24h {
  aed: number;
  ars: number;
  aud: number;
  bch: number;
  bdt: number;
  bhd: number;
  bmd: number;
  bnb: number;
  brl: number;
  btc: number;
  cad: number;
  chf: number;
  clp: number;
  cny: number;
  czk: number;
  dkk: number;
  dot: number;
  eos: number;
  eth: number;
  eur: number;
  gbp: number;
  gel: number;
  hkd: number;
  huf: number;
  idr: number;
  ils: number;
  inr: number;
  jpy: number;
  krw: number;
  kwd: number;
  lkr: number;
  ltc: number;
  mmk: number;
  mxn: number;
  myr: number;
  ngn: number;
  nok: number;
  nzd: number;
  php: number;
  pkr: number;
  pln: number;
  rub: number;
  sar: number;
  sek: number;
  sgd: number;
  thb: number;
  try: number;
  twd: number;
  uah: number;
  usd: number;
  vef: number;
  vnd: number;
  xag: number;
  xau: number;
  xdr: number;
  xlm: number;
  xrp: number;
  yfi: number;
  zar: number;
  bits: number;
  link: number;
  sats: number;
}
