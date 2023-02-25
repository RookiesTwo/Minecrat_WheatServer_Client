onEvent("item.registry", event => {
    event.create('pork_cabbage_boiled_dumpling').displayName('白菜猪肉水饺')
    .food((food) => {
        food
        .hunger(8)
        .saturation(1.3)
        .meat()
        .fastToEat()
    })
    event.create('tomato_egg_boiled_dumpling').displayName('番茄鸡蛋水饺')
    .food((food) => {
        food
        .hunger(6)
        .saturation(1.5)
        .fastToEat()
    })
    event.create('beef_tomato_boiled_dumpling').displayName('番茄牛肉水饺')
    .food((food) => {
        food
        .hunger(8)
        .saturation(1.5)
        .meat()
        .fastToEat()
    })
    event.create('rabbit_meat_boiled_dumpling').displayName('兔肉水饺').tooltip('兔兔那么可爱为什么要吃兔兔？')
    .food((food) => {
        food
        .hunger(5)
        .saturation(1.2)
        .meat()
        .fastToEat()
    })
    event.create('mutton_boiled_dumpling').displayName('羊肉饺子')
    .food((food) => {
        food
        .hunger(6)
        .saturation(1.5)
        .meat()
        .fastToEat()  
    })
    event.create('chicken_mushroom_boiled_dumpling') .displayName('香菇鸡肉水饺')  
    .food((food) => {
      food
      .hunger(7)
      .saturation(1.8)
      .meat()
      .fastToEat()
    })
    event.create('mushroom_boiled_dumpling').displayName('蘑菇水饺')
    .food((food) => {
        food
        .hunger(6)
        .saturation(0.9)
        .fastToEat()
    })
    event.create('cod_boiled_dumpling').displayName('鳕鱼水饺')
    .food((food) => {
        food
        .hunger(6)
        .saturation(1)
        .meat()
        .fastToEat()
    })
    event.create('salmon_boiled_dumpling').displayName('鲑鱼水饺')
    .food((food) => {
        food
        .hunger(5)
        .saturation(1)
        .meat()
        .fastToEat()
    })
    event.create('dandelion_leaf_boiled_dumpling').displayName('蒲公英饺子')
    .food((food) => {
        food
        .hunger(5)
        .saturation(1.2)
        .fastToEat()
        .effect("regeneration", 60, 0, 1)//生命恢复
    })
    event.create('pufferfish_boiled_dumpling').displayName('河豚水饺').tooltip('希望河豚清理干净了(害怕')
    .food((food) => {
        food
        .hunger(5)
        .saturation(1)
        .effect("poison", 200, 3, 0.2)//中毒
        .effect("blindness", 200, 0, 0.5)//失明
        .effect("nausea", 200, 2, 0.8)//反胃
        .fastToEat()
        .meat()
    })
    event.create('blame_meat_boiled_dumpling').displayName('奇怪的水饺').tooltip('这是什么馅的水饺？闻起来怪怪的？')
    .food((food) => {
        food
        .hunger(1)
        .effect("blindness", 200, 0, 1)//失明
        .effect("wither", 200, 3, 1)//凋零
        .effect("nausea", 200, 2, 1)//反胃
        .fastToEat()
        .meat()
        .eaten(ctx => {
            ctx.player.tell('怎么这饺子里面还有骨渣？woc！这饺子馅有毒！')
            ctx.player.give('minecraft:bone_meal')
        })   
    })
    event.create('blame_meat').displayName('奇怪的肉').tooltip('这是什么肉啊？！能吃吗？')
    .food((food) => {
        food
        .hunger(1)
        .effect("blindness", 200, 0, 1)
        .effect("wither", 200, 3, 1)
        .effect("nausea", 200, 2, 1)
        .meat()
        .eaten(ctx => {
            ctx.player.tell('woc!这肉有毒！')
        })  
    })
})

