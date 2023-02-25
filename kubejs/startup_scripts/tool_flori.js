onEvent('item.registry.tool_tiers', event => {

    //芙洛莉的风车
    event.add('flori_wheel', tier => {
      tier.uses = 250 // 耐久
      tier.speed = 48.0 // 挖掘速度
      tier.attackDamageBonus = 21.3 //伤害加成
      tier.level = 4 // 等级
      tier.enchantmentValue = 23 // 附魔
    })

    //弗洛里的风车
    event.add('fake_flori_wheel', tier => {
      tier.uses = 175 // 耐久
      tier.speed = 16.0 // 挖掘速度
      tier.attackDamageBonus = 10.3 //伤害加成
      tier.level = 3 // 等级
      tier.enchantmentValue = 17 // 附魔
    })

    //法兰大剑
    event.add('dong_sword', tier => {
      tier.uses = 90 // 耐久
      tier.speed = 16.0 // 挖掘速度
      tier.attackDamageBonus = 8.5 //伤害加成
      tier.level = 4 // 等级
      tier.enchantmentValue = 45 // 附魔
    })

    //法三太剑
    event.add('fake_dong_sword', tier => {
      tier.uses = 90 // 耐久
      tier.speed = 16.0 // 挖掘速度
      tier.attackDamageBonus = 3.5 //伤害加成
      tier.level = 3 // 等级
      tier.enchantmentValue = 17 // 附魔
    })
  })