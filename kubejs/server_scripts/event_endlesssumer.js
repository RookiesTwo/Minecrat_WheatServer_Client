onEvent("item.food_eaten", event => {
	if(event.player.mainHandItem.id == 'kubejs:common_bread'){
    let explosion = event.player.block.createExplosion();
	explosion.exploder(event.player);
    explosion.strength(20.0);
    explosion.causesFire(true);
	explosion.destroysTerrain(false);
    explosion.explode();
	}
})
onEvent("item.food_eaten", event => {
	if(event.player.mainHandItem.id == 'kubejs:endlesssummer'){
			event.player.tell("<Summer_Forever>:别吃我啊！我会痛的QAQ")
	}
})
