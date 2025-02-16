# Incorrect Balance Displayed in Dapp

This repository contains a bug report and solution for a common error in decentralized applications (DApps) related to displaying incorrect balances. The error stems from not properly converting wei (the smallest unit of ether) to ether before displaying the balance to the user.

## Bug

The `getBalance()` function retrieves the account balance using web3.js, but it returns the balance in wei, which is not user-friendly. This results in displaying an incorrect balance to the user.

## Solution

The corrected function `getBalanceInEther()` retrieves the balance in wei and then uses `web3.utils.fromWei()` to convert it to ether before returning it. This ensures the user sees the correct balance in ether.

## How to reproduce:

1. Clone this repo.
2. Run `getBalance.js` and observe the balance returned in wei.
3. Run `getBalanceFixed.js` and observe the balance returned in ether.

This example showcases the importance of handling unit conversions in DApp development for an optimal user experience.