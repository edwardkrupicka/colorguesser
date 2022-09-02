
import './styles/index.scss';
import Player from './components/Player'

let player = new Player;

const cell = document.querySelector('#cell1');
const rgbCode = document.querySelector('#rgbCode')

const generateRgbNum = () => {
	return (Math.floor(Math.random() * 256))
}

const createRgbCode = () => {
	rgbCode.innerHTML = `rgb(${generateRgbNum()}, ${generateRgbNum()}, ${generateRgbNum()})`
}

createRgbCode()

const funcName = () => {
	console.log('sdfasdf')
}

cell.addEventListener('click', funcName)


console.log(player)
