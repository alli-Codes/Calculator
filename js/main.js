const output = document.querySelector('#output')
const integerBtn = document.querySelectorAll('.integer__btn')
const sumBtn = document.querySelector('#sum__btn')
const equalBtn = document.querySelector('#equal__btn')

let collections = []
let seperator = []
let string

integerBtn.forEach((btn) => {
	btn.addEventListener('click', () => {
		let btnValue = btn.innerText
		seperator.push(btnValue)
		for(i = 0; i < seperator.length; i++){
			string = `${seperator[i]}`
		}
		output.innerText += string
		// collections.push(parseInt(btnValue))
	})
})

sumBtn.addEventListener('click', () => {
	let num = seperator.join('')
	collections.push(parseInt(num))
	output.innerText += '+'
	string = ''
	seperator = []
})

equalBtn.addEventListener('click', () => {
	let num = seperator.join('')
	collections.push(parseInt(num))
	let answer = collections.reduce((value, item) => value += item, 0)
	console.log(answer)
})