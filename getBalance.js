function getBalance() {
  const balance = await web3.eth.getBalance(address);
  return balance;
}

//Error:  The above function will return a balance in wei.  If you are expecting a balance in ether you must convert from wei to ether.

function getBalanceInEther() {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
  return balanceEther;
}