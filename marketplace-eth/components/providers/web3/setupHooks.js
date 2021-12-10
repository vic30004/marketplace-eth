import { handler as createUseAccount } from "./hooks/useAccounts";

export const setupHooks = (web3) => {
  return {
    useAccount: createUseAccount(web3),
  };
};
