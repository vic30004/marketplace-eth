import { handler as createUseAccount } from "./hooks/useAccounts";
import { handler as createUseNetworkHook } from "./hooks/useNetwork";

export const setupHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
    useNetwork: createUseNetworkHook(...deps),
  };
};
