import { handler as createUseAccount } from "./hooks/useAccounts";

export const setupHooks = (...deps) => {
  return {
    useAccount: createUseAccount(...deps),
  };
};
