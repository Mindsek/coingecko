import { createWeb3Modal, defaultConfig } from '@web3modal/ethers5/react';
import { create } from 'zustand';

const projectId = 'b98fba492d7662e227f08571e0113d3c';

const mainnet = {
    chainId: 1,
    name: 'Ethereum',
    currency: 'ETH',
    explorerUrl: 'https://etherscan.io',
    rpcUrl: 'https://cloudflare-eth.com'
};

const metadata = {
    name: 'Coingecko widget',
    description: 'Coingecko widget description',
    url: 'https://coingecko.com',
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

type Web3ModalStore = {
    web3Modal: any;
};

const useWeb3ModalStore = create<Web3ModalStore>((set) => ({
    web3Modal: createWeb3Modal({
        ethersConfig,
        chains: [mainnet],
        projectId,
        enableAnalytics: true,
        enableOnramp: true
    }),
}));

export default useWeb3ModalStore;