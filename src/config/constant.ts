export const tokenListUrl = 'https://list.htswap.io/tokenList/'
export const bridgeApi = 'https://bridgeapi.anyswap.exchange'
// export const bridgeApi = 'http://localhost:8107'

export enum VERSION {
  V1 = 'UNDERLYING',
  V1_T1 = 'UNDERLYING_TEST',
  V2 = 'STABLE',
  V3 = 'ARB_DEV',
}

export const USE_VERSION = VERSION.V2

export const ENV_NODE_CONFIG = USE_VERSION + '_ENV_NODE_CONFIG'

export const INIT_NODE = '56'

export const timeout = 1000 * 60 * 30

export const env = 'dev'

export const version = '0.1.0'