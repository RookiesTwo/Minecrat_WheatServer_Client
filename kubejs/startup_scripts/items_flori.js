onEvent('item.registry', event => {
	
	//无用物品
	event.create('car_trophy').displayName('赛车奖杯')
	event.create('experience_trophy').displayName('经验奖杯')
	event.create('gear_trophy').displayName('齿轮奖杯')
	event.create('melon_trophy').displayName('西瓜奖杯')
	event.create('planet_trophy').displayName('行星奖杯')
	event.create('disk_trophy').displayName('硬盘奖杯')
	event.create('effect_trophy').displayName('药水奖杯')
	event.create('glass_bowl').displayName('玻璃碗')
	event.create('wheat_trophy').displayName('小麦奖杯')
	event.create('diamond_upgrade').displayName('被束缚的紫水晶钻石')
	event.create('toty_tea').displayName('茉莉花茶').tooltip('§4贡献者物品|Jasmine_tear')
	event.create('fake_dong_sword_part_1').displayName('大剑部件1')
	event.create('fake_dong_sword_part_2').displayName('大剑部件2')

	//盔甲
	event.create("diamond_chainmail_helmet", "helmet").displayName("紫水晶钻石锁链头盔").tier("diamond_chain");
	event.create("diamond_chainmail_chestplate", "chestplate").displayName("紫水晶钻石锁链胸甲").tier("diamond_chain");
	event.create("diamond_chainmail_leggings", "leggings").displayName("紫水晶钻石锁链护腿").tier("diamond_chain");
	event.create("diamond_chainmail_boots", "boots").displayName("紫水晶钻石锁链靴子").tier("diamond_chain");

	event.create("netherite_chainmail_helmet", "helmet").displayName("下界合金锁链头盔").tier("netherite_chain");
	event.create("netherite_chainmail_chestplate", "chestplate").displayName("下界合金锁链胸甲").tier("netherite_chain");
	event.create("netherite_chainmail_leggings", "leggings").displayName("下界合金锁链护腿").tier("netherite_chain");
	event.create("nertherite_chainmail_boots", "boots").displayName("下界合金锁链靴子").tier("netherite_chain");

	//工具
	event.create("flori_wheel", "pickaxe").displayName("§6芙洛莉的风车").tier("flori_wheel").texture("assets\kubejs\textures\models\item\flori_wheel").tooltip('§3快回归战场！别叫你的敌人§c狐§3作非为！    §4管理员武器|FloriLilio')
	event.create("fake_flori_wheel", "pickaxe").displayName("弗洛里的凤东").tier("fake_flori_wheel").tooltip('§3嗯？哪里不对？    §4管理员武器|FloriLilio')
	event.create("dong_sword", "sword").displayName("法兰大剑").tier("dong_sword").tooltip('§4管理员武器|Dong49')
	event.create("fake_dong_sword", "sword").displayName("法三太剑").tier("fake_dong_sword").tooltip('§3嗯？哪里不对？    §4管理员武器|Dong49')

	//货币
	event.create('wheat_grain').displayName('麦粒').tooltip('§6服务器通用货币')

	//食物
	event.create("meat_cube").displayName('肉块').tooltip('§c他渴望被绷带包裹').food(food => {
		food
			.hunger(2)// 饱食度
			.saturation(0.5)// 饱和度
			.meat()
	  })
	  
	event.create("wheat_slime_pudding").displayName('麦香史莱姆奶茶布丁').tooltip('这是个有生命的小家伙！').food(food => {
			food
				.hunger(2)// 饱食度
				.saturation(2.5)// 饱和度
				.effect("speed", 200, 1, 1)
				.effect("jump_boost",200,1,1)
				.eaten(ctx => {
					  ctx.player.give('kubejs:glass_bowl')
				  })
		  })

	event.create("chocolate_cream_and_biscuit_stick").displayName('饼干棒蘸巧克力酱').food(food => {
		food
			.hunger(3)// 饱食度
			.saturation(2)// 饱和度
			.eaten(ctx => {
				  ctx.player.give('kubejs:glass_bowl')
			  })
	  })

	  event.create("biscuit_stick").displayName('饼干棒').food(food => {
		food
			.hunger(1)// 饱食度
			.saturation(1)// 饱和度
			.fastToEat()
	  })	

	  event.create("chocolate_cream").displayName('巧克力酱').food(food => {
		food
			.hunger(2)// 饱食度
			.saturation(2)// 饱和度
			.eaten(ctx => {
				ctx.player.give('kubejs:glass_bowl')
			})
	  })	

	  event.create("issac_pudding").displayName('以撒泪冻').tooltip('§c他在躲避母亲的追杀').food(food => {
		food
			.effect("haste", 600, 1, 1)
			.hunger(4)// 饱食度
			.saturation(0.25)// 饱和度
			.eaten(ctx => {
				ctx.player.give('kubejs:glass_bowl')
			})
	  })

	  event.create("cookie").displayName('饼干').food(food => {
		food
			.hunger(1)// 饱食度
			.saturation(1)// 饱和度
	  })

	  event.create("lava_pudding").displayName('熔岩布丁').food(food => {
		food
			.hunger(2)// 饱食度
			.saturation(2.5)// 饱和度
			.effect("fire_resistance", 6000, 0, 1)
			.effect("jump_boost",200,1,1)
			.eaten(ctx => {
				  ctx.player.give('kubejs:glass_bowl')
			  })
	  })

	  event.create("suicide_king").displayName('自杀之王').tooltip('§7真结局？').food(food => {
		food
			.hunger(80)// 饱食度
			.saturation(0.5)// 饱和度
			.fastToEat()
			.alwaysEdible()
			.eaten(ctx => {
				ctx.player.attack(9999999)
			})
	  })

	  event.create("cornroll").displayName('玉米卷').tooltip('§2为什么玉米卷里没有玉米？因为我疯疯疯疯了！').food(food => {
		food
			.hunger(10)// 饱食度
			.saturation(0.25)// 饱和度
	  })

	  event.create("bing").displayName('饼').food(food => {
		food
			.hunger(3)// 饱食度
			.saturation(0.33)// 饱和度
	  })
})