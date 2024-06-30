'use client';

import { siweConfig } from '@/lib/siweConfig';
import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';

const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || '';

const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
};

const metadata = {
    name: 'My Website',
    description: 'My Website description',
    url: 'https://mywebsite.com',
    icons: ['https://avatars.mywebsite.com/']
};

const ethersConfig = defaultConfig({
    metadata,
    enableEIP6963: true,
    enableInjected: true,
    enableCoinbase: true,
    rpcUrl: '...',
    defaultChainId: 1
});

createWeb3Modal({
    ethersConfig,
    chains: [mainnet],
    projectId,
    enableAnalytics: true,
    enableOnramp: true,
    siweConfig
});

export function Web3Modal({ children }: { children: React.ReactNode }) {
    return children;
}