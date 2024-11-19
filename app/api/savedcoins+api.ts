const API_KEY = process.env.CRYPTO_API_KEY_GECKO;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const ids = url.searchParams.get('ids') || '';

  const response = await fetch(
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&ids=${ids}&x_cg_demo_api_key=${API_KEY}`
  );

  const res = await response.json();
  return Response.json(res);
  // return Response.json(data);
}

const data = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image:
      'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png?1696501400',
    current_price: 82613,
    market_cap: 1636158619774,
    market_cap_rank: 1,
    fully_diluted_valuation: 1736974260091,
    total_volume: 138773300209,
    high_24h: 84506,
    low_24h: 76623,
    price_change_24h: 5983.01,
    price_change_percentage_24h: 7.80767,
    market_cap_change_24h: 121444335545,
    market_cap_change_percentage_24h: 8.01764,
    circulating_supply: 19781140,
    total_supply: 21000000,
    max_supply: 21000000,
    ath: 84506,
    ath_change_percentage: -2.23646,
    ath_date: '2024-11-12T06:55:50.429Z',
    atl: 51.3,
    atl_change_percentage: 160949.58878,
    atl_date: '2013-07-05T00:00:00.000Z',
    roi: null,
    last_updated: '2024-11-12T10:01:10.820Z',
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image:
      'https://coin-images.coingecko.com/coins/images/279/large/ethereum.png?1696501628',
    current_price: 3164.33,
    market_cap: 381194662608,
    market_cap_rank: 2,
    fully_diluted_valuation: 381194662608,
    total_volume: 66292030318,
    high_24h: 3220.6,
    low_24h: 2958.43,
    price_change_24h: 186.78,
    price_change_percentage_24h: 6.27294,
    market_cap_change_24h: 22834249541,
    market_cap_change_percentage_24h: 6.37187,
    circulating_supply: 120423718.450887,
    total_supply: 120423718.450887,
    max_supply: null,
    ath: 4228.93,
    ath_change_percentage: -25.17392,
    ath_date: '2021-12-01T08:38:24.623Z',
    atl: 0.381455,
    atl_change_percentage: 829444.57019,
    atl_date: '2015-10-20T00:00:00.000Z',
    roi: {
      times: 50.19636593039403,
      currency: 'btc',
      percentage: 5019.636593039403,
    },
    last_updated: '2024-11-12T10:00:59.980Z',
  },
];
