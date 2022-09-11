import './styles/index.scss';
import Player from './components/Player' ;
import Game from './components/Game';


const cell1 = document.querySelector('#cell1');
const cell2 = document.querySelector('#cell2');
const cell3 = document.querySelector('#cell3');
const cell4 = document.querySelector('#cell4');
const cell5 = document.querySelector('#cell5');
const cell6 = document.querySelector('#cell6');
const playerScore = document.querySelector('#playerScore')
const rgbCode = document.querySelector('#rgbCode');
const gameContainer = document.querySelector('#gameContainer');
const resetScoreBtn = document.querySelector('#resetScoreBtn')


let player = new Player;
let game = new Game;
let cells = [cell1, cell2, cell3, cell4, cell5, cell6]

console.log(player.score == '3')



const randomizeGridColors = () => {
	game.resetBoard()

	cells.forEach((cell, index) => {
		cell.style.backgroundColor = game.grid[cells[index].id]
	})
	
	rgbCode.innerHTML = `${cells[(Math.floor(Math.random() * 6))].style.backgroundColor}`
	
}

const clickGrid = (event) => {
	event.preventDefault();
	let backgroundColor = event.target.style.backgroundColor

	if(backgroundColor === rgbCode.innerHTML && event.target.className === 'cell') {
		player.updateScore()
		player.savePlayerToStorage(player)
		console.log(rgbCode)
		initializePage()
		event.target = game.grid[event.target.id]
		
	}

	if(backgroundColor !== rgbCode.innerHTML && event.target.className === 'cell') {
		event.target.style.backgroundColor = '#00000000';
	}

}

const initializePage = () => {
	randomizeGridColors()
	player.score = player.retrievePlayersFromStorage().score
	playerScore.innerHTML = player.retrievePlayersFromStorage().score
}

const resetScore = () => {
	player.resetScore()
	player.savePlayerToStorage(player)
	initializePage()
}


window.addEventListener('load', initializePage)
gameContainer.addEventListener('click', clickGrid)
resetScoreBtn.addEventListener('click', resetScore)
