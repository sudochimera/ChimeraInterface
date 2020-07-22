var config = {};

// self explanatory, your application name, descriptions, etc
config.appName = 'The Chimera Project';
config.appDescription = 'Chimera Wallet';
config.appSlogan = 'Sudo Crypto Innovation';
config.appId = 'chimera.walletshell';
config.appGitRepo = 'https://github.com/Chimera-Project';

// default port number for your daemon (e.g. TurtleCoind)
config.daemonDefaultRpcPort = 11246;

// wallet file created by this app will have this extension
config.walletFileDefaultExt = 'cmra';

// change this to match your wallet service executable filename
config.walletServiceBinaryFilename = 'chimera-service';

// version on the bundled service (turtle-service)
config.walletServiceBinaryVersion = "V3.0.1";

// config file format supported by wallet service, possible values:
// ini -->  for turtle service (or its forks) version <= v0.8.3
// json --> for turtle service (or its forks) version >= v0.8.4
config.walletServiceConfigFormat = "json";

// default port number for your wallet service (e.g. chimera-service)
config.walletServiceRpcPort = 8070;

// block explorer url, the [[TX_HASH]] will be substituted w/ actual transaction hash
config.blockExplorerUrl = 'http://blockexplorer.x10host.com/?hash=[[TX_HASH]]';

// default remote node to connect to, set this to a known reliable node for 'just works' user experience
config.remoteNodeDefaultHost = '155.138.219.219:11246';


// remote node list update url, set to null if you don't have one
// for CMRA:
// raw list: https://github.com/Chimera-Project/chimera/blob/development/src/config/CryptoNoteConfig.h
// filtered: https://github.com/Chimera-Project/chimera/blob/development/src/config/CryptoNoteConfig.h
config.remoteNodeListUpdateUrl = 'null';

// set to false if using raw/unfiltered node list
config.remoteNodeListFiltered = true;

// fallback remote node list, in case fetching update failed, fill this with known to works remote nodes
config.remoteNodeListFallback = [
  '155.138.219.219:11246',
  '95.179.188.118:11246',
  '207.148.77.219:11246',
  '75.174.142.9:11246',
  '3.225.124.85:11246',
];
config.remoteNodeCacheSupported = false;
config.remoteNodeSslSupported = false;

// your currency name
config.assetName = 'Chimera';
// your currency ticker
config.assetTicker = 'CMRA';
// your currency address prefix, for address validation
config.addressPrefix = 'cmra';
// standard wallet address length, for address validation
config.addressLength = 99;
// integrated wallet address length, for address validation. Added length is length of payment ID encoded in base58.
config.integratedAddressLength = config.addressLength + ((64 * 11) / 8);

// minimum fee for sending transaction
config.minimumFee = 1;
// minimum amount for sending transaction
config.mininumSend = 2;
// default mixin/anonimity for transaction
config.defaultMixin = 0;
// to represent human readable value
config.decimalPlaces = 2;
// to convert from atomic unit
config.decimalDivisor = 10 ** config.decimalPlaces;

// obfuscate address book entries, set to false if you want to save it in plain json file.
// not for security because the encryption key is attached here
config.addressBookObfuscateEntries = true;
// key use to obfuscate address book contents
config.addressBookObfuscationKey = '79009fb00ca1b7130832a42de45142cf6c4b7f333fe6fba5';
// initial/sample entries to fill new address book
config.addressBookSampleEntries = [
  {
    name: 'CMRA Donation',
    address: 'cmracVJ2XfqQjS2jmx8eYXJ9QJ2AHPsWf2SWDypr1FNyUA7fH8aNiLqCVUqPW49RMxYCAUC1mv3qw9jWMr99oyVbbhn6muisxdk',
    paymentId: '',
  }
];
// cipher config for private address book
config.addressBookCipherConfig = {
  algorithm: 'aes-256-gcm',
  saltLenght: 128,
  pbkdf2Rounds: 10000,
  pbkdf2Digest: 'sha512'
};

module.exports = config;
