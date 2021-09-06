import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super()
	}

	preload()
    {
        this.load.image('coin', 'assets/items_trap_animations/coin/coin_1.png')
        this.load.image('logo', 'assets/items_trap_animations/coin/coin_2.png')
        
        this.load.image('red', 'assets/particles/red.png')
    }

    create()
    {
        this.coin = this.add.image(400, 300, 'coin')
        this.coin.setScale(1.5).phys

        const logo = this.physics.add.image(400, 100, 'logo')
        logo.setScale(2.0);

        logo.setVelocity(100, 200)
        logo.setBounce(1, 1)
        logo.setCollideWorldBounds(true)

    }
}
