let collection = [2, 10]
let answer

const Calculator = function(data) {
	this.data = data
	this.answer = 0

	this.sum = () => {
		let sumData = this.data.reduce((value, item) => value += item, 0)
		console.log(sumData)
	}

	this.subtract = () => {
		let subtractData = this.data.reduce((value, item) => value -= item)
		console.log(subtractData)
	}
}

const cal = new Calculator(collection)
// cal.sum()
cal.subtract()