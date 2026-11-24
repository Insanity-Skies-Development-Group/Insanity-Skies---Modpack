// priority: 1000
ServerEvents.tags('item', (event) => {

    event.add('minecraft:poor_coals', 'kubejs:charcoal_pellet');

    event.add('minecraft:coal_blocks', 'minecraft:coal_block');
    event.add('minecraft:coal_blocks', 'gtceu:charcoal_block');

    event.add('minecraft:rich_coals', 'gtceu:coke_gem');
    event.add('minecraft:rich_coal_blocks', 'gtceu:coke_block');

});

global.CoalTypes = {
    poor: {
        material: 'poor_coals',
        defaultUseQuantity: 3,
        durationModifier: 1.6,
        blockVarient: '',
        ashType: 'ash'
    },
    standard: {
        material: 'coals',
        defaultUseQuantity: 2,
        durationModifier: 1.0,
        blockVarient: 'coal_blocks',
        ashType: 'ash'
    },
    rich: {
        material: 'rich_coals',
        defaultUseQuantity: 1,
        durationModifier: 0.6,
        blockVarient: 'rich_coal_blocks',
        ashType: 'dark_ash'
    }
};
