const API_KEY = process.env.CRYPTO_API_KEY_GECKO;

export async function GET(request: Request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  const response = await fetch(
    `https://api.coingecko.com/api/v3/search?query=${query}&x_cg_demo_api_key=${API_KEY}`
  );

  const res = await response.json();
  return Response.json(res);
  // return Response.json(data);
}

const data = {
  coins: [
    {
      id: 'bitcoin',
      name: 'Bitcoin',
      api_symbol: 'bitcoin',
      symbol: 'BTC',
      market_cap_rank: 1,
      thumb:
        'https://coin-images.coingecko.com/coins/images/1/thumb/bitcoin.png',
      large:
        'https://coin-images.coingecko.com/coins/images/1/large/bitcoin.png',
    },
    {
      id: 'wrapped-bitcoin',
      name: 'Wrapped Bitcoin',
      api_symbol: 'wrapped-bitcoin',
      symbol: 'WBTC',
      market_cap_rank: 15,
      thumb:
        'https://coin-images.coingecko.com/coins/images/7598/thumb/wrapped_bitcoin_wbtc.png',
      large:
        'https://coin-images.coingecko.com/coins/images/7598/large/wrapped_bitcoin_wbtc.png',
    },
    {
      id: 'bitcoin-cash',
      name: 'Bitcoin Cash',
      api_symbol: 'bitcoin-cash',
      symbol: 'BCH',
      market_cap_rank: 19,
      thumb:
        'https://coin-images.coingecko.com/coins/images/780/thumb/bitcoin-cash-circle.png',
      large:
        'https://coin-images.coingecko.com/coins/images/780/large/bitcoin-cash-circle.png',
    },
    {
      id: 'bitcoin-cash-sv',
      name: 'Bitcoin SV',
      api_symbol: 'bitcoin-cash-sv',
      symbol: 'BSV',
      market_cap_rank: 85,
      thumb:
        'https://coin-images.coingecko.com/coins/images/6799/thumb/BSV.png',
      large:
        'https://coin-images.coingecko.com/coins/images/6799/large/BSV.png',
    },
    {
      id: 'bitcoin-gold',
      name: 'Bitcoin Gold',
      api_symbol: 'bitcoin-gold',
      symbol: 'BTG',
      market_cap_rank: 185,
      thumb:
        'https://coin-images.coingecko.com/coins/images/1043/thumb/bitcoin-gold-logo.png',
      large:
        'https://coin-images.coingecko.com/coins/images/1043/large/bitcoin-gold-logo.png',
    },
    {
      id: 'harrypotterobamasonic10in',
      name: 'HarryPotterObamaSonic10Inu (ETH)',
      api_symbol: 'harrypotterobamasonic10in',
      symbol: 'BITCOIN',
      market_cap_rank: 268,
      thumb:
        'https://coin-images.coingecko.com/coins/images/30323/thumb/hpos10i_logo_casino_night-dexview.png',
      large:
        'https://coin-images.coingecko.com/coins/images/30323/large/hpos10i_logo_casino_night-dexview.png',
    },
    {
      id: 'bitcoin-wizards',
      name: 'Bitcoin Wizards',
      api_symbol: 'bitcoin-wizards',
      symbol: 'WZRD',
      market_cap_rank: 356,
      thumb:
        'https://coin-images.coingecko.com/coins/images/33425/thumb/78e454a7f80334c3e2ac89a314e79e0.jpg',
      large:
        'https://coin-images.coingecko.com/coins/images/33425/large/78e454a7f80334c3e2ac89a314e79e0.jpg',
    },
    {
      id: 'rabbitcoin-2',
      name: 'RabBitcoin',
      api_symbol: 'rabbitcoin-2',
      symbol: 'RBTC',
      market_cap_rank: 629,
      thumb:
        'https://coin-images.coingecko.com/coins/images/39910/thumb/256x256.png',
      large:
        'https://coin-images.coingecko.com/coins/images/39910/large/256x256.png',
    },
    {
      id: 'fractal-bitcoin',
      name: 'Fractal Bitcoin',
      api_symbol: 'fractal-bitcoin',
      symbol: 'FB',
      market_cap_rank: 1015,
      thumb:
        'https://coin-images.coingecko.com/coins/images/40049/thumb/Fractal_LogoMark_Round.png',
      large:
        'https://coin-images.coingecko.com/coins/images/40049/large/Fractal_LogoMark_Round.png',
    },
    {
      id: 'chain-key-bitcoin',
      name: 'Chain-key Bitcoin',
      api_symbol: 'chain-key-bitcoin',
      symbol: 'CKBTC',
      market_cap_rank: 1185,
      thumb:
        'https://coin-images.coingecko.com/coins/images/33818/thumb/01_ckBTC_Token_HEX__4x.png',
      large:
        'https://coin-images.coingecko.com/coins/images/33818/large/01_ckBTC_Token_HEX__4x.png',
    },
    {
      id: 'bitcoin-diamond',
      name: 'Bitcoin Diamond',
      api_symbol: 'bitcoin-diamond',
      symbol: 'BCD',
      market_cap_rank: 1397,
      thumb:
        'https://coin-images.coingecko.com/coins/images/1254/thumb/bitcoin-diamond.png',
      large:
        'https://coin-images.coingecko.com/coins/images/1254/large/bitcoin-diamond.png',
    },
    {
      id: 'zbit-ordinals',
      name: 'ZBIT•BLUE•BITCOIN',
      api_symbol: 'zbit-ordinals',
      symbol: 'ZBIT',
      market_cap_rank: 1570,
      thumb:
        'https://coin-images.coingecko.com/coins/images/30303/thumb/zbit_no_bg.png',
      large:
        'https://coin-images.coingecko.com/coins/images/30303/large/zbit_no_bg.png',
    },
    {
      id: 'bitcoin-on-base',
      name: 'Bitcoin on Base',
      api_symbol: 'bitcoin-on-base',
      symbol: 'BTCB',
      market_cap_rank: 1572,
      thumb:
        'https://coin-images.coingecko.com/coins/images/38868/thumb/BTCB_Official_Logo_July_2024.png',
      large:
        'https://coin-images.coingecko.com/coins/images/38868/large/BTCB_Official_Logo_July_2024.png',
    },
    {
      id: 'bridged-wrapped-bitcoin-starkgate',
      name: 'Bridged Wrapped Bitcoin (StarkGate)',
      api_symbol: 'bridged-wrapped-bitcoin-starkgate',
      symbol: 'WBTC',
      market_cap_rank: 1712,
      thumb:
        'https://coin-images.coingecko.com/coins/images/32207/thumb/wrapped_bitcoin_wbtc.png',
      large:
        'https://coin-images.coingecko.com/coins/images/32207/large/wrapped_bitcoin_wbtc.png',
    },
    {
      id: 'bitcoin-2',
      name: 'Bitcoin 2',
      api_symbol: 'bitcoin-2',
      symbol: 'BTC2',
      market_cap_rank: 1944,
      thumb:
        'https://coin-images.coingecko.com/coins/images/5925/thumb/bitcoin2_logo256.png',
      large:
        'https://coin-images.coingecko.com/coins/images/5925/large/bitcoin2_logo256.png',
    },
    {
      id: '99-bitcoins',
      name: '99 Bitcoins',
      api_symbol: '99-bitcoins',
      symbol: '99BTC',
      market_cap_rank: 1969,
      thumb:
        'https://coin-images.coingecko.com/coins/images/39633/thumb/99BTC_Logo_%282%29.png',
      large:
        'https://coin-images.coingecko.com/coins/images/39633/large/99BTC_Logo_%282%29.png',
    },
    {
      id: 'bitcoin-pro',
      name: 'Bitcoin Pro',
      api_symbol: 'bitcoin-pro',
      symbol: 'BTCP',
      market_cap_rank: 1977,
      thumb:
        'https://coin-images.coingecko.com/coins/images/3545/thumb/DSiD9ZhWsAE_8cS.png',
      large:
        'https://coin-images.coingecko.com/coins/images/3545/large/DSiD9ZhWsAE_8cS.png',
    },
    {
      id: 'bitcoin-usd-btcfi',
      name: 'Bitcoin USD (BTCFi)',
      api_symbol: 'bitcoin-usd-btcfi',
      symbol: 'BTCUSD',
      market_cap_rank: 2113,
      thumb:
        'https://coin-images.coingecko.com/coins/images/37181/thumb/BtcUSD_Logo.png',
      large:
        'https://coin-images.coingecko.com/coins/images/37181/large/BtcUSD_Logo.png',
    },
    {
      id: 'runes-x-bitcoin',
      name: 'RUNES•X•BITCOIN',
      api_symbol: 'runes-x-bitcoin',
      symbol: '✖',
      market_cap_rank: 2572,
      thumb:
        'https://coin-images.coingecko.com/coins/images/38250/thumb/runex_x.png',
      large:
        'https://coin-images.coingecko.com/coins/images/38250/large/runex_x.png',
    },
    {
      id: 'bitcoinbam',
      name: 'BitcoinBam',
      api_symbol: 'bitcoinbam',
      symbol: 'BTCBAM',
      market_cap_rank: 2792,
      thumb:
        'https://coin-images.coingecko.com/coins/images/12854/thumb/logo.png',
      large:
        'https://coin-images.coingecko.com/coins/images/12854/large/logo.png',
    },
    {
      id: 'meta-bitcoin-super',
      name: 'Meta Bitcoin Super',
      api_symbol: 'meta-bitcoin-super',
      symbol: 'MBTCS',
      market_cap_rank: 3393,
      thumb:
        'https://coin-images.coingecko.com/coins/images/50962/thumb/MBTCs-Logo2_200x200.png',
      large:
        'https://coin-images.coingecko.com/coins/images/50962/large/MBTCs-Logo2_200x200.png',
    },
    {
      id: 'oxbitcoin',
      name: '0xBitcoin',
      api_symbol: 'oxbitcoin',
      symbol: '0XBTC',
      market_cap_rank: 3436,
      thumb:
        'https://coin-images.coingecko.com/coins/images/4454/thumb/0xbtc.png',
      large:
        'https://coin-images.coingecko.com/coins/images/4454/large/0xbtc.png',
    },
    {
      id: 'bitcoinz',
      name: 'BitcoinZ',
      api_symbol: 'bitcoinz',
      symbol: 'BTCZ',
      market_cap_rank: 4273,
      thumb:
        'https://coin-images.coingecko.com/coins/images/1004/thumb/BTCZ_LOGO-1.png',
      large:
        'https://coin-images.coingecko.com/coins/images/1004/large/BTCZ_LOGO-1.png',
    },
    {
      id: 'bitcoin-cat-sol',
      name: 'Bitcoin Cat',
      api_symbol: 'bitcoin-cat-sol',
      symbol: 'SASHA',
      market_cap_rank: 4447,
      thumb:
        'https://coin-images.coingecko.com/coins/images/50900/thumb/download.png',
      large:
        'https://coin-images.coingecko.com/coins/images/50900/large/download.png',
    },
    {
      id: 'bitcointry-token',
      name: 'Bitcointry Token',
      api_symbol: 'bitcointry-token',
      symbol: 'BTTY',
      market_cap_rank: 4538,
      thumb:
        'https://coin-images.coingecko.com/coins/images/28641/thumb/bitcointry_token_logo_100x100.png',
      large:
        'https://coin-images.coingecko.com/coins/images/28641/large/bitcointry_token_logo_100x100.png',
    },
  ],
  exchanges: [
    {
      id: 'mercado_bitcoin',
      name: 'Mercado Bitcoin',
      market_type: 'spot',
      thumb:
        'https://coin-images.coingecko.com/markets/images/34/thumb/logo_MB_hexagono.png',
      large:
        'https://coin-images.coingecko.com/markets/images/34/large/logo_MB_hexagono.png',
    },
    {
      id: 'bitcointry_exchange',
      name: 'Bitcointry',
      market_type: 'spot',
      thumb:
        'https://coin-images.coingecko.com/markets/images/1231/thumb/bitcointry.png',
      large:
        'https://coin-images.coingecko.com/markets/images/1231/large/bitcointry.png',
    },
    {
      id: 'klever_exchange',
      name: 'Bitcoin.me',
      market_type: 'spot',
      thumb:
        'https://coin-images.coingecko.com/markets/images/984/thumb/BitcoinMe%283%29.png',
      large:
        'https://coin-images.coingecko.com/markets/images/984/large/BitcoinMe%283%29.png',
    },
  ],
  icos: [],
  categories: [
    {
      id: 298,
      name: 'Bitcoin Ecosystem',
    },
    {
      id: 346,
      name: 'Bitcoin Sidechains',
    },
    {
      id: 245,
      name: 'Bitcoin Fork',
    },
  ],
  nfts: [
    {
      id: 'bitcoin-trumps',
      name: 'Bitcoin Trumps',
      symbol: 'BITCOINTRUMPS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4046/thumb/bitcoin-trumps.png',
    },
    {
      id: 'bitcoin-whales',
      name: 'Bitcoin Whales',
      symbol: 'BITCOINWHALES',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3269/thumb/bitcoin-whales.png',
    },
    {
      id: 'punks-on-bitcoin',
      name: 'Punks On Bitcoin',
      symbol: 'PUNKSONBITCOIN',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4561/thumb/punks-on-bitcoin.png',
    },
    {
      id: 'bitcoin-shrooms',
      name: 'Bitcoin Shrooms',
      symbol: 'BITCOINSHROOMS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4161/thumb/bitcoin-shrooms.jpg',
    },
    {
      id: 'bitcoin-bandits',
      name: 'Bitcoin Bandits',
      symbol: 'BITCOIN-BANDITS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3266/thumb/bitcoin-bandits.png',
    },
    {
      id: 'bitcoin-punks',
      name: 'Bitcoin Punks',
      symbol: 'BITCOIN-PUNKS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3259/thumb/bitcoin-punks.png',
    },
    {
      id: 'bitcoin-knight-s2',
      name: 'Bitcoin Knight S2',
      symbol: 'BITCOIN-KNIGHT-S2',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3362/thumb/bitcoin-knight-s2.png',
    },
    {
      id: 'bitcoin-puppets',
      name: 'Bitcoin Puppets',
      symbol: 'BITCOIN-PUPPETS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3873/thumb/bitcoin-puppets.png',
    },
    {
      id: 'bitcoin-mfers',
      name: 'Bitcoin mfers',
      symbol: 'BITCOIN-MFERS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4302/thumb/bitcoin-mfers.png',
    },
    {
      id: 'bitcoin-wizards',
      name: 'Bitcoin Wizards',
      symbol: 'BITCOIN-WIZARDS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3683/thumb/wizards.png',
    },
    {
      id: 'bitcoin-xiuxian-og',
      name: 'Bitcoin XiuXian OG',
      symbol: 'BITCOIN_XIUXIAN_OG',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/15029/thumb/bitcoin-xiuxian-og.png',
    },
    {
      id: 'my-bitcoin-kingdom-genesis-lands',
      name: 'My Bitcoin Kingdom: Genesis Lands',
      symbol: 'MBK-CASTLES-GENESIS-LANDS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3946/thumb/Screenshot_2024-01-23_225538.png',
    },
    {
      id: 'bitcoin-ape-yacht-gang',
      name: 'Bitcoin Ape Yacht Gang',
      symbol: 'BAYG',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3745/thumb/BAYG.png',
    },
    {
      id: 'bitcoin-gizmos',
      name: 'Bitcoin Gizmos',
      symbol: 'BITCOINGIZMOS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/15066/thumb/bitcoin-gizmos.png',
    },
    {
      id: 'bitcoin-buds',
      name: 'Bitcoin Buds ',
      symbol: 'BITCOIN-BUDS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3285/thumb/bitcoin-buds.jpg',
    },
    {
      id: 'bitcoin-rugs',
      name: 'Bitcoin Rugs',
      symbol: 'BITCOINRUGS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3313/thumb/bitcoin-rugs.png',
    },
    {
      id: 'bitcoin-babbies',
      name: 'BITCOIN BABBIES',
      symbol: 'BTCBABBIES',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4181/thumb/bitcoin-babbies.gif',
    },
    {
      id: 'bitcoin-burials',
      name: 'Bitcoin Burials',
      symbol: 'BITCOINBURIALS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3863/thumb/BURY.jpg',
    },
    {
      id: 'bitcoinbearclub',
      name: 'Bitcoin Bear Club',
      symbol: 'BBC',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/1284/thumb/unnamed.gif',
    },
    {
      id: 'bitcoin-boos-boottalion',
      name: 'Bitcoin Boos: Boottalion',
      symbol: 'BOOTTALION',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4045/thumb/bitcoin-boos-boottalion.png',
    },
    {
      id: 'bitcoin-puppets-honoraries',
      name: 'Bitcoin Puppets Honoraries',
      symbol: 'BITCOIN-PUPPETS-HONORARIES',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/15069/thumb/bitcoin-puppets-honoraries.png',
    },
    {
      id: 'bitcoin-frogs',
      name: 'Bitcoin Frogs',
      symbol: 'BITCOIN-FROGS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3262/thumb/bitcoin-frogs.png',
    },
    {
      id: 'bitcoinorb',
      name: 'BITCOINORB',
      symbol: 'BTCORB',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/2944/thumb/bitcoinorb.png',
    },
    {
      id: 'right-place-right-time-bitcoin-volatility-art-by-matt-kane',
      name: 'Right Place & Right Time - Bitcoin Volatility Art',
      symbol: 'VLY',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3530/thumb/right-place-right-time-bitcoin-volatility-art-by-matt-kane.png',
    },
    {
      id: 'bitcoin-eyes',
      name: 'Bitcoin eyes',
      symbol: 'BITCOIN-EYES',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3325/thumb/bitcoin-eyes.jpg',
    },
    {
      id: 'bitcoin-bear-cubs',
      name: 'Bitcoin Bear Cubs',
      symbol: 'BBC',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3280/thumb/bitcoin-bear-cubs.png',
    },
    {
      id: 'bitcoin-pigs',
      name: 'Bitcoin Pigs',
      symbol: 'BITCOINPIGS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3355/thumb/bitcoin-pigs.jpg',
    },
    {
      id: 'bitcoin-monsters',
      name: 'Bitcoin Monsters',
      symbol: 'BITCOINMONSTERS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4559/thumb/bitcoin-monsters.jpg',
    },
    {
      id: 'bitcoin-crypto-dickbutts',
      name: 'Bitcoin Crypto DickButts',
      symbol: 'BITCOIN-CRYPTODICKBUTTS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3656/thumb/bitcoin-crypto-dickbutts.png',
    },
    {
      id: 'bitcoin-skellies',
      name: 'Bitcoin Skellies',
      symbol: 'BITCOIN_SKELLIES',
      thumb: 'missing_thumb.png',
    },
    {
      id: 'bitcoin-mechanics',
      name: 'Bitcoin Mechanics',
      symbol: 'BTC_MECHANICS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3306/thumb/bitcoin-mechanics.png',
    },
    {
      id: 'bitcoin-rocks',
      name: 'Bitcoin Rocks',
      symbol: 'BITCOINROCKS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3713/thumb/bitcoin-rocks.jpg',
    },
    {
      id: 'bitcoin-spacemen',
      name: 'Bitcoin Spacemen',
      symbol: 'BITCOIN_SPACEMEN',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4722/thumb/bitcoin-spacemen.png',
    },
    {
      id: 'bitcoin-pandas',
      name: 'Bitcoin Pandas',
      symbol: 'BITCOIN-PANDAS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3365/thumb/bitcoin-pandas.jpg',
    },
    {
      id: 'bitcoin-budgie',
      name: 'Bitcoin Budgie',
      symbol: 'BUDGIE',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/4167/thumb/bitcoin-budgie.gif',
    },
    {
      id: 'cursed-bitcoin-punks',
      name: 'Cursed Bitcoin Punks',
      symbol: 'CURSEDBITCOINPUNKS',
      thumb:
        'https://coin-images.coingecko.com/nft_contracts/images/3311/thumb/cursed-bitcoin-punks.png',
    },
  ],
};
