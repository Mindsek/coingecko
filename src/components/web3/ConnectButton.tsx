"use client";
import { useWeb3Modal } from '@web3modal/ethers5/react';
export default function ConnectButton() {
    const { open } = useWeb3Modal();

    return (
        // <Button onClick={() => open()}>Connect Wallet</Button>
        <w3m-button />

    );
}