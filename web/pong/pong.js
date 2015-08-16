var canvas = $('canvas')[0];
var game = new Game(canvas);

var background = new Background();
game.ball = new Ball();
game.player = new Player();
game.bot = new Bot();

game.entities = [
	background,
	game.ball,
	game.player,
	game.bot
];

game.start();
canvas.focus();