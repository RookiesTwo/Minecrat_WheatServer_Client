onEvent('recipes', event => { 
  //浆果互换
  event.remove({output: 'minecraft:sweet_berries'})
  event.remove({output: 'byg:blueberries'})

    // 锁链甲升级
  event.smithing(Item.of('kubejs:diamond_chainmail_helmet', '{Damage:0}'), Item.of('minecraft:chainmail_helmet', '{Damage:0}'), 'kubejs:diamond_upgrade')
  event.smithing(Item.of('kubejs:diamond_chainmail_chestplate', '{Damage:0}'), Item.of('minecraft:chainmail_chestplate', '{Damage:0}'), 'kubejs:diamond_upgrade')
  event.smithing(Item.of('kubejs:diamond_chainmail_leggings', '{Damage:0}'), Item.of('minecraft:chainmail_leggings', '{Damage:0}'), 'kubejs:diamond_upgrade')
  event.smithing(Item.of('kubejs:diamond_chainmail_boots', '{Damage:0}'), Item.of('minecraft:chainmail_boots', '{Damage:0}'), 'kubejs:diamond_upgrade')

  event.smithing(Item.of('kubejs:netherite_chainmail_helmet', '{Damage:0}'), Item.of('kubejs:diamond_chainmail_helmet', '{Damage:0}'), 'minecraft:netherite_ingot')
  event.smithing(Item.of('kubejs:netherite_chainmail_chestplate', '{Damage:0}'), Item.of('kubejs:diamond_chainmail_chestplate', '{Damage:0}'), 'minecraft:netherite_ingot')
  event.smithing(Item.of('kubejs:netherite_chainmail_leggings', '{Damage:0}'), Item.of('kubejs:diamond_chainmail_leggings', '{Damage:0}'), 'minecraft:netherite_ingot')
  event.smithing(Item.of('kubejs:nertherite_chainmail_boots', '{Damage:0}'), Item.of('kubejs:diamond_chainmail_boots', '{Damage:0}'), 'minecraft:netherite_ingot')

    // 表
    event.shapeless(Item.of('utilities:watch', '{Damage:0}'),['minecraft:clock','minecraft:chain'])

    //麦粒
    event.shapeless('kubejs:wheat_grain',['8x minecraft:wheat'])
    

    //小麦奖杯
    event.shapeless('kubejs:wheat_trophy',['kubejs:car_trophy','kubejs:experience_trophy','kubejs:gear_trophy','kubejs:melon_trophy','kubejs:planet_trophy','kubejs:disk_trophy','kubejs:effect_trophy'])
    event.shapeless('travelersbackpack:dragon',['kubejs:wheat_trophy'])

    //鸡肉卷
    event.shapeless('kubejs:cornroll',['kubejs:bing','farmersdelight:tomato','#c:cooked_chicken','#c:crops/cabbage','farmersdelight:onion'])

    //饼干
    event.custom({
      "type": "vinery:wood_fired_oven_cooking",
      "ingredients": [
        {
          "item": "minecraft:wheat"
        },{
          "item": "minecraft:sugar"
        }
      ],
      "item": "kubejs:cookie",
      "count": 4,
      "experience": 0.35
    })

    //巧克力饼干棒
    event.shapeless('kubejs:chocolate_cream_and_biscuit_stick',['2x kubejs:biscuit_stick','kubejs:chocolate_cream'])

    //饼干棒
    event.shaped('4x kubejs:biscuit_stick', [
        'A',
        'A'
    ], {
        A:'kubejs:cookie',
    })

    //大剑部件1 2
    event.shaped('kubejs:fake_dong_sword_part_1', [
      ' A ',
      'BCB',
      ' D '
  ], {
      A:'minecraft:wither_skeleton_skull',
      B:'minecraft:obsidian',
      C:'things:hardening_catalyst',
      D:'minecraft:netherite_ingot'
  })
    event.shaped('kubejs:fake_dong_sword_part_2', [
      ' BB',
      'BAB',
      'AB '
  ], {
      A:'minecraft:iron_block',
      B:'minecraft:quartz'
  })

    //合成大宝剑
    event.smithing(Item.of('kubejs:fake_dong_sword', '{Damage:0,Unbreakable:1b}'), 'kubejs:fake_dong_sword_part_1', 'kubejs:fake_dong_sword_part_2')

    //鞘翅
    event.shaped(Item.of('minecraft:elytra', '{Damage:0}'), [
      'ABA',
      'CDC',
      'E E'
  ], {
      A:'spirit:soul_steel_ingot',
      B:'minecraft:light_gray_banner',
      C:'minecraft:popped_chorus_fruit',
      D:'minecraft:ghast_tear',
      E:'minecraft:phantom_membrane'
  })

    //上帝之音
    event.shaped('xercamusic:god', [
            ' A ',
            'BCA'
        ], {
            A:'minecraft:gold_ingot',
            B:'minecraft:gold_nugget',
            C:'minecraft:emerald'
        })

        //起源之球
        event.shaped('origins:orb_of_origin', [
            ' A ',
            'BCB',
            ' D '
        ], {
            A:'minecraft:nether_star',
            B:'things:gleaming_compound',
            C:'minecraft:heart_of_the_sea',
            D:'minecraft:ghast_tear'
        })

        //加速版
        event.shaped('automobility:dash_panel',[
            'ABA',
            'ACA'
        ],{
            A:'minecraft:amethyst_shard',
            B:'minecraft:heavy_weighted_pressure_plate',
            C:'minecraft:powered_rail'
        })
        event.shapeless('automobility:sloped_dash_panel',['automobility:dash_panel'])
        event.shapeless('automobility:steep_sloped_dash_panel',['automobility:sloped_dash_panel'])
        event.shapeless('automobility:dash_panel',['automobility:sloped_dash_panel'])
        event.shapeless('automobility:dash_panel',['automobility:steep_sloped_dash_panel'])

        //爱之杖
        event.shaped('ratsmischief:love_staff',[
            '  C',
            ' B ',
            'A  '
        ],{
            A:'minecraft:red_dye',
            B:'minecraft:bone',
            C:'minecraft:apple'
        })

        //压缩机械
        event.shaped('compactmachines:machine_tiny',[
          'AAA',
          'ABA',
          'AAA'
      ],{
          A:'compactmachines:wall',
          B:'minecraft:copper_block'
      })
      event.shaped('compactmachines:machine_small',[
        'AAA',
        'ABA',
        'AAA'
    ],{
        A:'compactmachines:wall',
        B:'minecraft:iron_block'
    })
    event.shaped('compactmachines:machine_normal',[
      'AAA',
      'ABA',
      'AAA'
  ],{
      A:'compactmachines:wall',
      B:'minecraft:gold_block'
  })
    event.shaped('compactmachines:machine_large',[
      'AAA',
      'AAA',
      'AAA'
  ],{
      A:'compactmachines:wall'
  })
        event.shaped('compactmachines:machine_giant',[
      'AAA',
      'ABA',
      'AAA'
  ],{
      A:'compactmachines:wall',
      B:'minecraft:diamond_block'
  })
        event.shaped('compactmachines:machine_maximum',[
      'AAA',
      'ABA',
      'AAA'
  ],{
      A:'compactmachines:wall',
      B:'minecraft:netherite_block'
  })


        //以撒泪冻
        event.custom({
            "type": "farmersdelight:cooking",
            "container": {
                "item": "kubejs:glass_bowl"
                },
            "cookingtime": 200,
            "experience": 1.0,
            "ingredients": [
              {
                "item": "mca:baby_boy"
              },
              {
                "item": "farmersdelight:iron_knife"
              },
              {
                "item": "minecraft:sugar"
              },
              {
                "item": "minecraft:cocoa_beans"
              }
            ],
            "recipe_book_tab": "meals",
            "result": {
              "item": "kubejs:issac_pudding"
            }
          })

        //麦香史莱姆
        event.custom({
          "type": "farmersdelight:cooking",
          "container": {
              "item": "kubejs:glass_bowl"
              },
          "cookingtime": 200,
          "experience": 1.0,
          "ingredients": [
            {
              "item": "minecraft:slime_ball"
            },
            {
              "tag": "minecraft:milk"
            },
            {
              "item": "minecraft:wheat"
            },
            {
              "item": "minecraft:sugar"
            }
          ],
          "recipe_book_tab": "meals",
          "result": {
            "item": "kubejs:wheat_slime_pudding"
          }
        })
        
        //岩浆布丁
        event.custom({
          "type": "farmersdelight:cooking",
          "container": {
              "item": "kubejs:glass_bowl"
              },
          "cookingtime": 200,
          "experience": 1.0,
          "ingredients": [
            {
              "tag": "minecraft:milk"
            },
            {
              "item": "minecraft:magma_cream"
            },
            {
              "item": "minecraft:magma_cream"
            },
            {
              "item": "minecraft:blaze_powder"
            },
            {
              "item": "minecraft:sugar"
            }
          ],
          "recipe_book_tab": "meals",
          "result": {
            "item": "kubejs:lava_pudding"
          }
        })
      
      //巧克力
      event.custom({
        "type": "farmersdelight:cooking",
        "container": {
            "item": "kubejs:glass_bowl"
            },
        "cookingtime": 200,
        "experience": 1.0,
        "ingredients": [
          {
            "tag": "minecraft:milk"
          },
          {
            "item": "minecraft:cocoa_beans"
          },
          {
            "item": "minecraft:sugar"
          }
        ],
        "recipe_book_tab": "meals",
        "result": {
          "item": "kubejs:chocolate_cream"
        }
      })

        //自杀之王
        event.shaped('kubejs:suicide_king',[
          'A',
          'B',
          'A'
      ],{
          A:'#c:swords',
          B:'minecraft:paper'
      })
      
      //玻璃碗
        event.shaped('3x kubejs:glass_bowl',[
          'A A',
          ' B '
      ],{
          A:'#c:glass_blocks',
          B:'#c:glass_panes'
      })

      //钻石锁链升级模块
      event.shaped('kubejs:diamond_upgrade',[
        'AB',
        'CA'
    ],{
        A:'minecraft:chain',
        B:'minecraft:diamond',
        C:'minecraft:amethyst_shard'
    })

    //钻石锁链升级模块
    event.shaped('kubejs:diamond_upgrade',[
      'BA',
      'AC'
  ],{
      A:'minecraft:chain',
      B:'minecraft:diamond',
      C:'minecraft:amethyst_shard'
  })

      //饼
      event.custom({
        "type": "vinery:wood_fired_oven_cooking",
        "ingredients": [
          {
            "item": "farmersdelight:wheat_dough"
          }
        ],
        "item": "kubejs:bing",
        "count": 1,
        "experience": 0.35
      })

      //肉块
      event.stonecutting('kubejs:meat_cube'/* 输出物品 */, '#kubejs:raw_meat'/* 输入物品 */)
})