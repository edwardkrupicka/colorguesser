class Scripts {
	constructor() {

	}

	generateRgbNum() {
		return (Math.floor(Math.random() * 256))
	}
	
	createRgbCode() {
		return `rgb(${this.generateRgbNum()}, ${this.generateRgbNum()}, ${this.generateRgbNum()})`
	}

}

export default Scripts;