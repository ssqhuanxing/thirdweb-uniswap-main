import getContract from "./lib/get-contract";
import Token from "./types/token";

export const tokens: { [id: string]: Token } = {
  "weth": {
    address: "0x4200000000000000000000000000000000000006",
    symbol: "WETH",
    decimals: 18,
    image: "https://assets.coingecko.com/coins/images/2518/standard/weth.png?1696503332"
  },
  "usdbc": {
    address: "0xd9aAEc86B65D86f6A7B5B1b0c42FFA531710b6CA",
    symbol: "USDbC",
    decimals: 6,
    image: "https://assets.coingecko.com/coins/images/31272/standard/usdc_base.png?1696527318"
  },
  "cbETH": {
    address: "0x2Ae3F1Ec7F1F5012CFEab0185bfc7aa3cf0DEc22",
    symbol: "cbETH",
    decimals: 18,
    image: "https://assets.coingecko.com/coins/images/27008/standard/cbeth.png?1696527658"
  },
  "dai": {
    address: "0x50c5725949A6F0c72E6C4a641F24049A917DB0Cb",
    symbol: "DAI",
    decimals: 18,
    image: "https://assets.coingecko.com/coins/images/9956/standard/Badge_Dai.png?1696527608"
  },
  "tbtc": {
    address: "0x236aa50979D5f3De3Bd1Eeb40E81137F22ab794b",
    symbol: "tBTC",
    decimals: 18,
    image: "https://assets.coingecko.com/coins/images/26248/standard/tbtc.png?1696527825"
  },
  "axlusdc": {
    address: "0xEB466342C4d449BC9f53A865D5Cb90586f405215",
    symbol: "axlUSDC",
    decimals: 6,
    image: "https://assets.coingecko.com/coins/images/30240/standard/axlUSDC_icon.png?1696527251"
  },
  "comp": {
    address: "0x9e1028F5F1D5eDE59748FFceE5532509976840E0",
    symbol: "COMP",
    decimals: 18,
    image: "https://assets.coingecko.com/coins/images/10775/standard/COMP.png?1696527607"
  },
  "uni": {
    address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
    symbol: "UNI",
    decimals: 18,
    image: "https://assets.coingecko.com/coins/images/12504/standard/uni.jpg?1696527795"
  }
}

// Base Uniswap v3 contract addresses
export const ROUTER = "0x2626664c2603336E57B271c5C0b26F421741e481";
export const FACTORY = "0x33128a8fC17869897dcE68Ed026d694621f6FDfD";
export const QUOTER = "0x3d4e44Eb1374240CE5F1B871ab261CD16335B76a";

export const ROUTER_CONTRACT = getContract({ address: ROUTER });
export const FACTORY_CONTRACT = getContract({ address: FACTORY });
export const QUOTER_CONTRACT = getContract({ address: QUOTER });
