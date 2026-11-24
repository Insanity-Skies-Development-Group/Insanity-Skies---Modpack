
ServerEvents.recipes((event) => {
    const id = global.id;
    
    event.campfireCooking('kubejs:charcoal_pellet', '#minecraft:logs_that_burn', 0, 600);

    event.smelting(`2x kubejs:charcoal_pellet`, `#minecraft:logs_that_burn`).id('insanity_skies:smelting/charcoal_pellet_manual_only');

    event.recipes.create.crushing(['3x kubejs:charcoal_pellet', Item.of('kubejs:charcoal_pellet').withChance(0.5)],'minecraft:charcoal')

    event.remove({ id: 'minecraft:charcoal' });

    event.remove({ id: 'gtceu:coke_oven/log_to_charcoal' });

    event.recipes.gtceu
        .coke_oven(id('log_to_charcoal'))
        .itemInputs('1x #minecraft:logs_that_burn')
        .itemOutputs('1x minecraft:charcoal')
        .outputFluids('gtceu:creosote 100')
        .duration(600);

    //mega
    event.recipes.gtceu
        .coke_oven(id('mega_log_to_charcoal'))
        .itemInputs('16x #minecraft:logs_that_burn')
        .itemOutputs('16x minecraft:charcoal')
        .outputFluids('gtceu:creosote 1000')
        .duration(9 * 600);

    event.recipes.gtceu
        .coke_oven(id('mega_charcoal_enrichment'))
        .itemInputs('16x #minecraft:coals')
        .itemOutputs('16x gtceu:coke_gem')
        .outputFluids('gtceu:coal_tar 100')
        .duration(9 * 800);

})
