import Scripts from './scripts';

let scripts = new Scripts

class Game {
	constructor() {
    this.grid = {
								cell1: scripts.createRgbCode(),
								cell2: scripts.createRgbCode(),
								cell3: scripts.createRgbCode(),
								cell4: scripts.createRgbCode(),
								cell5: scripts.createRgbCode(),
								cell6: scripts.createRgbCode()
                }
    this.rgbCodeAnswer = this.grid[`cell${Math.floor(Math.random() * 6)}`]
  }

	resetBoard() {
		this.grid = {
				cell1: scripts.createRgbCode(),
				cell2: scripts.createRgbCode(),
				cell3: scripts.createRgbCode(),
				cell4: scripts.createRgbCode(),
				cell5: scripts.createRgbCode(),
				cell6: scripts.createRgbCode()
		}
	}

}

export default Game;