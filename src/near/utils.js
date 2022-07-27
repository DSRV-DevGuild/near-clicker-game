import connectionConfig from "./config";
import { connect, WalletConnection } from "near-api-js";

export async function initContract() {
  // Set a connection to the NEAR network
  const near = await connect(connectionConfig);

  // Initialize a Wallet Object
  window.walletConnection = new WalletConnection(near);
  // Getting the Account ID
  window.accountId = window.walletConnection.getAccountId();
  // (debug)
  console.log(near);
  console.log(window.walletConnection);
  console.log("accountId: " + window.accountId);
}
