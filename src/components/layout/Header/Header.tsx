import ConnectButton from '@/components/web3/ConnectButton'

const Header = () => {
    return (
        <section className='flex min-h-[10dvh] items-center border-b justify-center w-full'>
            <div className='w-[90%] max-w-7xl '>
                <ConnectButton />
            </div>
        </section>
    )
}

export default Header
