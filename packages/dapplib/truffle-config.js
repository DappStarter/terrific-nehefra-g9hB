require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner clog orient spot grief ranch remember smile half clinic orient senior'; 
let testAccounts = [
"0xe14e933c3ed3283fc58c548bfc4a3b39e3663e0a871ffd3ecd50797ec01e6576",
"0x9982285544303d3186a379b2b53487c8d8a7d65cd316af40cc3f4d6d9bb7fac1",
"0x831a573e9b5236ec366f5393567bcb5c56026a4411f408e1a94e797938d0f64c",
"0xf8aaaf7879d793e2da5ecff74b3e0efafa19a745d57c13132f469ffefd978e4f",
"0x2cfc3a6bec0da1450445ac6fde12cd20f2f3e84cff2ee7be81420e3798da2071",
"0x3c1770e06acc8b3fbf6e1c7286dd065f4f8ace00df95862595742fdebfa0793c",
"0x8f69b513a3c0577be9b13ecb6a43e31d920a9574e4d15a0ac9783cc3138c5d36",
"0x7b7008059e8292c17e568af2a70d6b62bc36a67be000ae36b545d3200326c95a",
"0xf90c81c16c6d773665839a739bc4a885c08e3447676a42d99514c4fb60ecf210",
"0x33c0b3e8b626bb86a9691208ccb90a526436ab1b3929dd01bbb4a3c540c8b00b"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


