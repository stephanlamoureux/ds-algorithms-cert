function checkCashRegister(price, cash, cid) {
	// values are multiplied by 100 to deal with precision errors involved with decimals
	const denomination = [10000, 2000, 1000, 500, 100, 25, 10, 5, 1]

	function transaction(price, cash, cid) {
		let changeNeeded = (cash - price) * 100
		// money will be pushed to the second value in each array
		const moneyProvided = [
			['ONE HUNDRED', 0],
			['TWENTY', 0],
			['TEN', 0],
			['FIVE', 0],
			['ONE', 0],
			['QUARTER', 0],
			['DIME', 0],
			['NICKEL', 0],
			['PENNY', 0],
		]

		// take the cid, reverse it, and multiply values by 100
		const availableCash = [...cid]
			.reverse()
			.map((item) => [item[0], item[1] * 100])
		// get the total sum of all cash and divide by 100
		const sumOfCash = availableCash.reduce((a, b) => a + b[1], 0) / 100

		// if sumOfCash is exact change needed return
		if (sumOfCash === changeNeeded / 100) {
			return { status: 'CLOSED', change: [...cid] }
		} else {
			for (let i = 0; i < availableCash.length; i++) {
				// if denomination values are < changeNeeded && availableCash values are > 0:
				while (denomination[i] <= changeNeeded && availableCash[i][1] > 0) {
					// moneyProvided array is increased by denomination value
					moneyProvided[i][1] += denomination[i]
					// changeNeeded is decreased by same denomination value
					changeNeeded -= denomination[i]
					// availableCash is also decreased by same denomination value
					availableCash[i][1] -= denomination[i]
				}
			}
		}

		// clean up the moneyProvided array
		const change = moneyProvided
			// resetting the money values by dividing by 100
			.map((item) => [item[0], item[1] / 100])
			// filtering out all non-empty dollar and value arrays
			.filter((item) => item[1] !== 0)
		// calculate the total of the change array
		const changeTotal = change.reduce((a, b) => a + b[1], 0)
		// if the total change is less than the change needed
		if (changeTotal < changeNeeded) {
			return { status: 'INSUFFICIENT_FUNDS', change: [] }
		}
		return { status: 'OPEN', change }
	}

	const answer = transaction(price, cash, cid)
	return answer
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
