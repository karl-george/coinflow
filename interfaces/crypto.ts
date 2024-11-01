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


///////////////////////////////////////////////////

export interface CoinDetails {
  id: string;
  symbol: string;
  name: string;
  web_slug: string;
  asset_platform_id: null;
  platforms: Platforms;
  detail_platforms: Detailplatforms;
  block_time_in_minutes: number;
  hashing_algorithm: string;
  categories: string[];
  preview_listing: boolean;
  public_notice: null;
  additional_notices: any[];
  localization: Localization;
  description: Localization;
  links: Links;
  image: Image;
  country_origin: string;
  genesis_date: string;
  sentiment_votes_up_percentage: number;
  sentiment_votes_down_percentage: number;
  watchlist_portfolio_users: number;
  market_cap_rank: number;
  market_data: Marketdata;
  community_data: Communitydata;
  developer_data: Developerdata;
  status_updates: any[];
  last_updated: string;
  tickers: Ticker[];
}

interface Ticker {
  base: string;
  target: string;
  market: Market;
  last: number;
  volume: number;
  converted_last: Convertedlast;
  converted_volume: Convertedlast;
  trust_score: string;
  bid_ask_spread_percentage: number;
  timestamp: string;
  last_traded_at: string;
  last_fetch_at: string;
  is_anomaly: boolean;
  is_stale: boolean;
  trade_url: string;
  token_info_url: null;
  coin_id: string;
  target_coin_id: string;
}

interface Convertedlast {
  btc: number;
  eth: number;
  usd: number;
}

interface Market {
  name: string;
  identifier: string;
  has_trading_incentive: boolean;
}

interface Developerdata {
  forks: number;
  stars: number;
  subscribers: number;
  total_issues: number;
  closed_issues: number;
  pull_requests_merged: number;
  pull_request_contributors: number;
  code_additions_deletions_4_weeks: Codeadditionsdeletions4weeks;
  commit_count_4_weeks: number;
  last_4_weeks_commit_activity_series: any[];
}

interface Codeadditionsdeletions4weeks {
  additions: number;
  deletions: number;
}

interface Communitydata {
  facebook_likes: null;
  twitter_followers: number;
  reddit_average_posts_48h: number;
  reddit_average_comments_48h: number;
  reddit_subscribers: number;
  reddit_accounts_active_48h: number;
  telegram_channel_user_count: null;
}

interface Marketdata {
  current_price: Currentprice;
  total_value_locked: null;
  mcap_to_tvl_ratio: null;
  fdv_to_tvl_ratio: null;
  roi: null;
  ath: Currentprice;
  ath_change_percentage: Currentprice;
  ath_date: Athdate;
  atl: Currentprice;
  atl_change_percentage: Currentprice;
  atl_date: Athdate;
  market_cap: Currentprice;
  market_cap_rank: number;
  fully_diluted_valuation: Currentprice;
  market_cap_fdv_ratio: number;
  total_volume: Currentprice;
  high_24h: Currentprice;
  low_24h: Currentprice;
  price_change_24h: number;
  price_change_percentage_24h: number;
  price_change_percentage_7d: number;
  price_change_percentage_14d: number;
  price_change_percentage_30d: number;
  price_change_percentage_60d: number;
  price_change_percentage_200d: number;
  price_change_percentage_1y: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  price_change_24h_in_currency: Currentprice;
  price_change_percentage_1h_in_currency: Currentprice;
  price_change_percentage_24h_in_currency: Currentprice;
  price_change_percentage_7d_in_currency: Currentprice;
  price_change_percentage_14d_in_currency: Currentprice;
  price_change_percentage_30d_in_currency: Currentprice;
  price_change_percentage_60d_in_currency: Currentprice;
  price_change_percentage_200d_in_currency: Currentprice;
  price_change_percentage_1y_in_currency: Currentprice;
  market_cap_change_24h_in_currency: Currentprice;
  market_cap_change_percentage_24h_in_currency: Currentprice;
  total_supply: number;
  max_supply: number;
  circulating_supply: number;
  last_updated: string;
}

interface Athdate {
  aed: string;
  ars: string;
  aud: string;
  bch: string;
  bdt: string;
  bhd: string;
  bmd: string;
  bnb: string;
  brl: string;
  btc: string;
  cad: string;
  chf: string;
  clp: string;
  cny: string;
  czk: string;
  dkk: string;
  dot: string;
  eos: string;
  eth: string;
  eur: string;
  gbp: string;
  gel: string;
  hkd: string;
  huf: string;
  idr: string;
  ils: string;
  inr: string;
  jpy: string;
  krw: string;
  kwd: string;
  lkr: string;
  ltc: string;
  mmk: string;
  mxn: string;
  myr: string;
  ngn: string;
  nok: string;
  nzd: string;
  php: string;
  pkr: string;
  pln: string;
  rub: string;
  sar: string;
  sek: string;
  sgd: string;
  thb: string;
  try: string;
  twd: string;
  uah: string;
  usd: string;
  vef: string;
  vnd: string;
  xag: string;
  xau: string;
  xdr: string;
  xlm: string;
  xrp: string;
  yfi: string;
  zar: string;
  bits: string;
  link: string;
  sats: string;
}

interface Currentprice {
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

interface Image {
  thumb: string;
  small: string;
  large: string;
}

interface Links {
  homepage: string[];
  whitepaper: string;
  blockchain_site: string[];
  official_forum_url: string[];
  chat_url: string[];
  announcement_url: string[];
  twitter_screen_name: string;
  facebook_username: string;
  bitcointalk_thread_identifier: null;
  telegram_channel_identifier: string;
  subreddit_url: string;
  repos_url: Reposurl;
}

interface Reposurl {
  github: string[];
  bitbucket: any[];
}

interface Localization {
  en: string;
  de: string;
}

interface Detailplatforms {
  '': _;
}

interface _ {
  decimal_place: null;
  contract_address: string;
}

interface Platforms {
  '': string;
}