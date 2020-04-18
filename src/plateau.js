export default class Plateau {
  constructor (game) {
    this.game = game;
    this.updateCount = 0;
  }

  preload () {
    this.game.load.image('plateau', '../assets/plateau_640x239.png');
  }

  create () {
    this.tileSprite = this.game.add.tileSprite(200, 110, 400, 225, 'plateau');
    this.tileSprite.setDepth(2);
  }

  update () {
    if (this.updateCount % 10 === 0) {
      this.tileSprite.tilePositionX++;
    }
    this.updateCount++;
  }
}