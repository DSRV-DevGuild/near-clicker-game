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
