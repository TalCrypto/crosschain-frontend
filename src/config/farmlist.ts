import { MATIC_MAIN_CHAINID } from './chainConfig/matic'
import { FTM_MAIN_CHAINID } from './chainConfig/ftm'
import { BNB_MAIN_CHAINID } from './chainConfig/bsc'

interface FarmConfig {
  [key: string]: any
}

const BSC_ANY_TOKEN = '0xf68c9df95a18b2a5a5fa1124d79eeeffbad0b6fa'
const BSC_ANY = {
  [BSC_ANY_TOKEN]: {
    list: {
      symbol: "ANY",
      name: "Anyswap",
      decimals: 18
    }
  }
}

const config: FarmConfig = {
  'MATIC': {
    chainId: MATIC_MAIN_CHAINID,
    farmToken: '0xB0A3dA261BAD3Df3f3cc3a4A337e7e81f6407c49',
    lpToken: '0x9610b01aaa57ec026001f7ec5cface51bfea0ba6',
    blockNumber: 41143
  },
  'FTM': {
    chainId: FTM_MAIN_CHAINID,
    farmToken: '0xdccd7b567da13a11cde232522be708b2d1a14498',
    lpToken: '0x95bf7e307bc1ab0ba38ae10fc27084bc36fcd605',
    blockNumber: 86393
  },
  'BSC': {
    chainId: BNB_MAIN_CHAINID,
    farmToken: '0x411f3e09c66b30e7facfec45cd823b2e19dfad2d',
    lpToken: BSC_ANY_TOKEN,
    blockNumber: 28800,
    lpTokenIno: BSC_ANY
  },
  'BSC_HERO': {
    chainId: BNB_MAIN_CHAINID,
    farmToken: '0x5e430f88d1be82eb3ef92b6ff06125168fd5dcf2',
    lpToken: BSC_ANY_TOKEN,
    blockNumber: 28800,
    lpTokenIno: BSC_ANY
  },
}
export default config