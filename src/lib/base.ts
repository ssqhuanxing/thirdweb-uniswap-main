import { defineChain } from "thirdweb"

export default defineChain({
    chain: "Base",
    chainId: 8453,
    name: "Base",
    shortName: "base",
    slug: "base",
    testnet: false,
    rpc: ["https://mainnet.base.org"],
    nativeCurrency: {
        name: "Ether",
        symbol: "ETH",
        decimals: 18,
    },
    explorers: [
        {
            name: "Base Explorer",
            url: "https://basescan.org",
            standard: "EIP3091"
        },
    ],
}); 