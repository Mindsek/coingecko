import { SIWESession } from '@web3modal/siwe'
import { getSession } from 'next-auth/react'
const Tokens = async () => {
    const session = await getSession()
    if (!session) {
        return <div>No session</div>
    }
    const { address, chainId } = session as unknown as SIWESession
    return (
        <div>
            <h1>Tokens</h1>
            <p>{address}</p>
            <p>{chainId}</p>
        </div>
    )
}

export default Tokens
