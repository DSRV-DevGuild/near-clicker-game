import connectionConfig from "./config";
import { connect, WalletConnection, Contract } from "near-api-js";

export async function initContract() {
  // Set a connection to the NEAR network
  const near = await connect(connectionConfig);

  // Initialize a Wallet Object
  window.walletConnection = new WalletConnection(near);
  // Getting the Account ID
  window.accountId = window.walletConnection.getAccountId();

  // Initialize a Contract Object (to interact with the contract)
  window.contract = await new Contract(
    window.walletConnection.account(),
    connectionConfig.contractName,
    {
      viewMethods: ["get_num"],
      changeMethods: ["increment", "reset"]
    }
  );
}

export async function get_num() {
  let count = await window.contract.get_num({ args: {} });
  return count;
}

export async function increment(count) {
  return await window.contract.increment({ args: { count: count } });
}

export async function reset() {
  return await window.contract.reset({ args: {} });
}

export function login() {
  window.walletConnection.requestSignIn(connectionConfig.contractName);
}

export function logout() {
  window.walletConnection.signOut();
  window.location.reload();
}
