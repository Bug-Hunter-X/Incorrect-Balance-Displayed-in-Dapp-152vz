function getBalanceInEther() {
  const balanceWei = await web3.eth.getBalance(address);
  const balanceEther = web3.utils.fromWei(balanceWei, 'ether');
  return balanceEther;
}

//This function now correctly converts the balance from wei to ether before returning the balance.