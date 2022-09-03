class Player {
	constructor() {
		this.score = 0;
	}

	updateScore() {
		this.score++
	}

	
	savePlayerToStorage(array) {
		let stringifiedPlayers = JSON.stringify(array)
		localStorage.setItem('stringifiedPlayers', stringifiedPlayers)
	}
	
	retrievePlayersFromStorage() {
		let retrivedPlayers = localStorage.getItem('stringifiedPlayers')
		let parsedPlayers = JSON.parse(retrivedPlayers);
		return parsedPlayers;
	}
	
	resetScore() {
		this.score = 0;
	}

}

export default Player;