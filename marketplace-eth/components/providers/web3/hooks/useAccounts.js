import { useState, useEffect } from "react";

export const handler = (web3, provider) => () => {
  const [account, setAccount] = useState(null);

  useEffect(() => {
    const getAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    };
    web3 && getAccount();
  }, [web3]);

  // Update account when the account is changed. 
  useEffect(() => {
    provider &&
    provider.on("accountsChanged", (accounts) =>
        setAccount(accounts[0] ?? null)
      );
  }, [provider]);
  return {
    account,
  };
};
