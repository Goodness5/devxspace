import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { arbitrum, goerli, mainnet, optimism, polygon, sepolia } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';
import '../../styles/globals.css';
import { useAccount } from "wagmi";
import Pagelayout from '../pagelayout/Pagelayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BASE_URL } from "../utils/Api"
import { useEffect } from 'react';

const { chains, provider, webSocketProvider } = configureChains(
  [
    mainnet,
    polygon,
    optimism,
    arbitrum,
    sepolia,
    ...(process.env.NEXT_PUBLIC_ENABLE_TESTNETS === 'true' ? [goerli] : []),
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'RainbowKit App',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});



function MyApp({ Component, pageProps }) {
  const { data: account } = useAccount();
  const address = account?.address;
  console.log(address)

  useEffect(() => {
    const url = `${BASE_URL}/login`
    if (address) {
      // Send the address to the login route
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      })
        .then((response) => {
          if (response.ok) {
            console.log('Successfully logged in');
          } else {
            console.log('Failed to log in');
          }
        })
        .catch((error) => {
          console.error('Failed to log in:', error);
        });
    }
  }, [address]);

  return (
    <WagmiConfig client={wagmiClient}>
       <ToastContainer />
       <QueryClientProvider client={client}>

      <RainbowKitProvider chains={chains}>
      <Pagelayout>
        <Component {...pageProps} />
      </Pagelayout>
      </RainbowKitProvider>
       </QueryClientProvider>
    </WagmiConfig>
  );
}

export default MyApp;
