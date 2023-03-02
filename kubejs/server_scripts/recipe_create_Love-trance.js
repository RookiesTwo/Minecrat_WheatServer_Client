onEvent('recipes', event => {
event.recipes.createMixing(['farmersdelight:fried_rice'], [
  'minecraft:bowl',
  'minecraft:egg',
  'minecraft:carrot',
  'farmersdelight:onion',
  'farmersdelight:rice'
]).heated(),
//米饭合成表
event.recipes.createMixing(['farmersdelight:tomato_sauce'], [
  'minecraft:bowl',
  'farmersdelight:tomato',
  'farmersdelight:tomato'
]).heated()
//番茄酱合成表
event.recipes.createCutting(['4x farmersdelight:pumpkin_slice'],[
  'minecraft:pumpkin'
])
//南瓜片合成表
event.recipes.createMixing(['farmersdelight:melon_popsicle'], [
  '4x minecraft:melon_slice',
  '2x minecraft:ice',
  'minecraft:stick'
])
//西瓜冰棍合成表
event.shapeless('minecraft:glow_berries',['minecraft:sweet_berries','minecraft:glowstone_dust'])
//发光浆果合成表
event.recipes.createCompacting(['minecraft:red_dye'],[
'minecraft:sweet_berries'
])
//红染料合成表（整活）
event.recipes.createMixing(['farmersdelight:apple_cider'],[
  'minecraft:glass_bottle',
  '2x minecraft:apple',
  'minecraft:sugar',
]).heated()
//苹果酒合成表
event.recipes.createMixing(['farmersdelight:hot_cocoa'],[
  'minecraft:sugar',
  '#c:milk',
  '2x cocoa_beans'
]).heated()
//热可可合成表
event.recipes.createMixing(['kubejs:lava_pudding'],[
  '#c:milk',
  '2x minecraft:magma_cream',
  'minecraft:sugar',
  'minecraft:blaze_powder',
]).heated()
//熔岩布丁合成表
event.recipes.createCrushing(['minecraft:cobblestone'],[
  'minecraft:stone'
])
//圆石的粉碎合成表
event.recipes.createMixing(['minecraft:diamond_ore'],[
  '8x #c:stone',
  '4x minecraft:diamond'
]).superheated()
//钻石矿合成表
event.recipes.createMixing(['2x create:brass_ingot','6x create:brass_nugget'],[
  'minecraft:raw_copper',
  'create:raw_zinc'
]).heated()
//1.3倍黄铜
event.recipes.createMixing(['3x minecraft:iron_ingot','create:experience_nugget'],[
  '2x minecraft:raw_iron',
  'minecraft:coal'
]).heated()
//1.5倍铁
event.recipes.createMixing(['3x minecraft:gold_ingot','create:experience_nugget'],[
  '2x minecraft:raw_gold',
  'minecraft:coal'
]).heated()
//1.5倍金
event.recipes.createMixing(['3x minecraft:copper_ingot','create:experience_nugget'],[
  '2x minecraft:raw_copper',
  'minecraft:coal'
]).heated()
//1.5倍铜
event.recipes.createMixing(['3x create:zinc_ingot','create:experience_nugget'],[
  '2x create:raw_zinc',
  'minecraft:coal'
]).heated()
//1.5倍锌
event.recipes.createMixing(['3x ad_astra:ostrum_ingot','create:experience_nugget'],[
  '2x ad_astra:raw_ostrum',
  'minecraft:coal'
]).heated()
//1.5倍紫金
event.recipes.createMixing(['3x ad_astra:calorite_ingot','create:experience_nugget'],[
  '2x ad_astra:raw_calorite',
  'minecraft:coal'
]).heated()
//1.5倍耐热金属
event.recipes.createMixing(['3x ad_astra:desh_ingot','create:experience_nugget'],[
  '2x ad_astra:raw_desh',
  'minecraft:coal'
]).heated()
//1.5倍戴斯
event.recipes.createMixing(['minecraft:iron_ore'],[
  '4x raw_iron',
  '8x #c:stone'
]).superheated()
//铁矿石合成表
event.recipes.createMixing(['minecraft:gold_ore'],[
  '4x minecraft:raw_gold',
  '8x #c:stone'
]).superheated()
//金矿石合成表
event.recipes.createMixing(['minecraft:copper_ore'],[
  '4x minecraft:raw_copper',
  '8x #c:stone'
]).superheated()
//铜矿石合成表
event.recipes.createMixing(['create:zinc_ore'],[
  '4x create:raw_zinc',
  '8x #c:stone'
]).superheated()
//锌矿石合成表
event.recipes.createMixing(['minecraft:lapis_ore'],[
  '24x minecraft:lapis_lazuli',
  '8x #c:stone'
]).superheated()
//青金石矿石合成表
event.recipes.createMixing(['minecraft:redstone_ore'],[
  '8x minecraft:redstone',
  '8x #c:stone'
]).superheated()
//红石矿石合成表
})