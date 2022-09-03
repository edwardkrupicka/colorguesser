class Scripts {
	constructor() {

	}

	generateRgbNum() {
		return (Math.floor(Math.random() * 256))
	}
	
	createRgbCode() {
		// rgbCode.innerHTML = `rgb(${generateRgbNum()}, ${generateRgbNum()}, ${generateRgbNum()})`
		return `rgb(${this.generateRgbNum()}, ${this.generateRgbNum()}, ${this.generateRgbNum()})`
	}

}

export default Scripts;