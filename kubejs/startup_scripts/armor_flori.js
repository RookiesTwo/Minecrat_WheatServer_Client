onEvent('item.registry.armor_tiers', event => {

    //钻石锁链
    // 栏位顺序对应 [靴子, 护腿, 胸甲, 头盔]
    event.add('diamond_chain', tier => {
      tier.durabilityMultiplier = 33 // 耐久倍率，每个栏位对应[13, 15, 16, 11]
      tier.slotProtections = [1, 4, 5, 2]// 保护倍率
      tier.enchantmentValue = 17 // 附魔
      tier.equipSound = 'minecraft:item.armor.equip_diamond' // 装备音效
      tier.repairIngredient = 'diamond_upgrade' // 铁砧修复用物品
      tier.toughness = 2.0 // 护甲韧性，钻石为2.0，下界合金为3.0
      tier.knockbackResistance = 0.0
    })

    //下界锁链
    // 栏位顺序对应 [靴子, 护腿, 胸甲, 头盔]
    event.add('netherite_chain', tier => {
        tier.durabilityMultiplier = 37 // 耐久倍率，每个栏位对应[13, 15, 16, 11]
        tier.slotProtections = [1, 4, 5, 2]// 保护倍率
        tier.enchantmentValue = 22 // 附魔
        tier.equipSound = 'minecraft:item.armor.equip_netherite' // 装备音效
        tier.repairIngredient = 'minecraft:netherite_ingot' // 铁砧修复用物品
        tier.toughness = 3.0 // 护甲韧性，钻石为2.0，下界合金为3.0
        tier.knockbackResistance = 0.0
      })

  })