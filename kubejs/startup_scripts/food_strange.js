onEvent('item.registry', event => {
	event.create('little_wheat_grain').displayName('麦粒'),
	//麦粒 
	event.create('wheat_chicken')
		.displayName('§b 麦服佳肴：麦粒烧鸡')
		.tooltip(['§e 啊','§e 芝士烧麦鸡，混合了小麦和肉鸡的双重口感.','§e 让人神清气爽，一蹦三尺高。还会高喊着‘噫！好！肉鸡开服啦！’'])
		.food(food => {
			food
				.hunger(10)
				.saturation(0.5)
				.effect('speed', 1200 , 1 ,0.5)
				.effect('jump_boost', 2400 , 1 ,0.6)
		}),
	//麦粒烧鸡
	event.create('powder_wheat').displayName('麦药').tooltip(['§6 奇怪的小麦……','§4 看样子好像会……爆炸？','搞不清楚.']),
	event.create('common_bread')
		.displayName('§4 麦服佳肴：普通面包')
		.tooltip(['§4 商店里卖的爆款现烤面包.','§a 感觉和普通面包没什么区别嘛.','大概？'])
		.food(food => {
			food
				.hunger(10)
				.saturation(0.5)
				.effect('slowness', 200 , 254 ,1)
				.eaten(ctx =>{
					ctx.player.tell('§4 好吃到爆炸，芜湖！')
				})
		}),//会炸的面包
	event.create('chicken_cookie')
		.displayName('§b 麦服佳肴：未熟曲奇')
		.tooltip(['§e 好像没烤熟的曲奇','§e 这到底是什么馅的？','§a 鸡肉？'])
		.food(food => {
			food
				.hunger(6)
				.saturation(0.5)
				.effect('nausea', 3600 , 1 ,1)
				.eaten(ctx =>{
					ctx.player.tell('§e 真没熟啊啊啊啊啊口区。诶？怎么还吃出鸡来了？')
					ctx.player.runCommandSilent('/summon minecraft:chicken ~ ~ ~')
				})
		}),//吃出鸡的曲奇
	event.create('endlesssummer')
		 .displayName('§b EndlessSummer')
		 .tooltip('§a 黄瓜兼菜鸡    §4开发者物品|无尽之夏')
		 .food(food => {
			food
				.hunger(6)
				.saturation(0.5)
				.effect('glowing', 1200 , 1 ,0.5)
				.eaten(ctx =>{
					ctx.player.tell('§a 居然还是能吃的黄瓜！')
				})
		})//EndlessSummer黄瓜
})