import algosdk from "algosdk";

const algodToken = "a".repeat(64);
const server: string = "http://localhost";
const port: string = "4001";
const mnemonic: string = 
"innocent laundry door boat interest start clip loan eager moral pigeon bulb royal neck situate leopard venue legend catch link ticket security knock able suffer"

export function getClient(): algosdk.Algodv2 {
    let client = new algosdk.Algodv2(algodToken, server, port);
    return client;
}
export function getAccount(): algosdk.Account {
    let account = algosdk.mnemonicToSecretKey(mnemonic);
    return account;
}