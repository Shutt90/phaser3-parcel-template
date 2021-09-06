import Phaser from 'phaser'

export default class HelloWorldScene extends Phaser.Scene
{
	constructor()
	{
		super()
	}

	preload()
    {
        this.load.image('coin', 'assets/items_trap_animations/coin/coin_1.png');
        this.load.image('logo', 'assets/items_trap_animations/coin/coin_2.png');
        this.load.image('skeleton_1', 'assets/character_animation/monsters_idle/skeleton1/v1/skeleton_v1_1.png');
        this.load.image('skeleton_2', 'assets/character_animation/monsters_idle/skeleton1/v1/skeleton_v1_2.png');
        this.load.image('skeleton_3', 'assets/character_animation/monsters_idle/skeleton1/v1/skeleton_v1_3.png');
        this.load.image('skeleton_4', 'assets/character_animation/monsters_idle/skeleton1/v1/skeleton_v1_4.png');
    }

    create()
    {
        this.coin = this.add.sprite(400, 300, 'coin');
        this.skeleton1 = this.add.sprite(100, 300, 'skeleton_1').setScale(2);
        this.skeleton2 = this.add.sprite(200, 300, 'skeleton_2').setScale(2);
        this.skeleton3 = this.add.sprite(300, 300, 'skeleton_3').setScale(2);
        this.skeleton4 = this.add.sprite(400, 300, 'skeleton_4').setScale(2);

        this.coin.setScale(1.5);
        console.log(this.coin);

        const logo = this.physics.add.image(400, 100, 'logo');
        logo.setScale(2.0);

        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

    }
}
