require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'grace sell tackle spot crazy release sad million imitate private equal giggle'; 
let testAccounts = [
"0x68cf755abbed593c12b92078e7dd355137717cca0870e99d89eb6a7bdcb69b10",
"0x2339c6b9ab45058393a258675e481fd0e6d420da27a7ace0e6229ee6bca73f27",
"0x899c6c9fef4e86829b5f162c4fb68cc7b3da6366dc3079fc03ad30f6ef2f131c",
"0xee0860f0e166e5aa92bd854980604a60fc7cf61051366791cdd3fc2b6252a545",
"0xd7bae79852f01f7912211e154c5c5b3bfd9bb2623f290a49ae9984828495e59f",
"0x17a78ba9228d3353e0298a8f3f7c4b13c32a6906b06c5ed96e3d4c76c292a541",
"0x1f943e7bc957e13b3a0cf4660f6651c7fd052aad529e23c992835d4549331fec",
"0xc5aff32acd30487c9a792f1ef601c5b9fd670c98d6e89799b9173de05d2502c8",
"0xafb13ae4c5af63638f195894a534c71bddd032e64cb6f86813b52ab677dbe5a4",
"0xdb8c92cbdbce58edee0533548deca027d72a92495229b2954738914fbb28451a"
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


