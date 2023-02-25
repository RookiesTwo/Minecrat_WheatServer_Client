onEvent('recipes', event => {
	event.smelting('kubejs:little_wheat_grain','minecraft:wheat_seeds'),//麦粒
	event.custom({
	"type": 'farmersdelight:cooking',
	"cookingtime": 200,
	"experience": 10.0,
	"ingredients": [
    {
      "item": 'minecraft:cooked_chicken'
    },
    {
      "item": 'kubejs:little_wheat_grain'
    }
	],
	"result": {
    "item": 'kubejs:wheat_chicken'
	}
	}),//麦鸡
    event.shaped('kubejs:powder_wheat', [
            'WGW',
            'GWG',
            'WGW'
		], {
            W: 'minecraft:wheat',
			G: 'minecraft:gunpowder'
			}),//麦药
	event.blasting('kubejs:common_bread','kubejs:powder_wheat'),//炸包
    event.shaped('kubejs:chicken_cookie', [
            'WCW',
            'CWC',
            'WCW'
		], {
            W: 'minecraft:wheat',
			C: 'minecraft:chicken'
			}),
	event.shaped('kubejs:endlesssummer', [
            ' c ',
            'cSc',
            ' c '
		], {
            c: 'minecraft:sugar_cane',
			S: 'minecraft:sugar'
			}),
	event.shapeless('minecraft:sweet_berries',['byg:blueberries','minecraft:red_dye'])
})