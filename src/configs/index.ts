import chainConfigCanary3 from './chain_config.elesto-canary-3.json';
import chainConfigTestnet from './chain_config.testnet.json';
import chainConfigMainnet from './chain_config.mainnet.json';
import generalConfig from './general_config.json';

/**
 * Helper function to return different configs based on the same chain
 * @returns config
 */
const getChainConfig = () => {
  const chainType = process.env.NEXT_PUBLIC_CHAIN_TYPE || process.env.NEXT_PUBLIC_CHAIN_STATUS;
  switch (chainType) {
    case 'mainnet':
      return chainConfigMainnet;
    case 'testnet':
      return chainConfigTestnet;
    case 'elesto-canary-3':
    default:
      return chainConfigCanary3;
  }
};

const chainConfig = getChainConfig();

export {
  chainConfig,
  generalConfig,
};
