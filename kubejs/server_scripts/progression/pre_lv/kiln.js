ServerEvents.recipes((event) => {
    const id = global.id;

    event.remove({ id: 'minecraft:brick' });
    event.remove({ id: 'gtceu:smelting/fireclay_brick' });
    event.remove({ id: 'gtceu:smelting/coke_oven_brick' });

    const Coals = global.CoalTypes;

    const coalTier = (tier) => {

        const coalValues = Coals[tier];
        if (!coalValues) return;

        const {
            material,
            defaultUseQuantity,
            durationModifier,
            blockVarient       
        } = coalValues;

        let materialTag = `#minecraft:${material}`;

        let blockTag = blockVarient == '' ? false : `#minecraft:${blockVarient}`;

        const KilnRecipe = (megaOnly,input,output,durationScaler,baseFuelQuantity) => {

            // Base Kiln
            if(!megaOnly) {

                event.recipes.gtceu
                    .kiln(id(`${output.split(':')[1]}_via_${material}`))
                    .itemInputs(input)
                    .itemInputs(`${baseFuelQuantity * defaultUseQuantity}x ${materialTag}`)
                    .itemOutputs(output)
                    .duration(durationScaler * durationModifier);

            };

            // Mega Kiln
            if(material === 'poor_coals') return;
            event.recipes.gtceu
                .kiln(id(`mega_${output.split(':')[1]}_via_${material}`))
                .itemInputs(`${16 * input.split('x ')[0]}x ${input.split('x ')[1]}`)
                .itemInputs(`${baseFuelQuantity * defaultUseQuantity}x ${blockTag}`)
                .itemOutputs(`${16 * output.split('x ')[0]}x ${output.split('x ')[1]}`)
                .duration(9 * durationModifier * durationScaler);

        };

        KilnRecipe(false,'4x gtceu:compressed_clay','4x minecraft:brick',300,1);
        KilnRecipe(false,'4x gtceu:compressed_coke_clay','4x gtceu:coke_oven_brick',320,1);
        KilnRecipe(false,'4x gtceu:compressed_fireclay','4x gtceu:firebrick',360,2);
        KilnRecipe(true,'4x kubejs:compressed_refractory_heat_clay','4x kubejs:refractory_heat_brick',480,3);

    };

    coalTier('poor');
    coalTier('standard');
    coalTier('rich');

    event
        .smelting('minecraft:brick', 'gtceu:compressed_clay')
        .cookingTime(300)
        .id(`insanity_skies:smelting/brick_manual_only`);     

    event
        .smelting('gtceu:coke_oven_brick', 'gtceu:compressed_coke_clay')
        .cookingTime(320)
        .id(`insanity_skies:smelting/coke_oven_brick_manual_only`); 

    event
        .smelting('gtceu:firebrick', 'gtceu:compressed_fireclay')
        .cookingTime(360)
        .id(`insanity_skies:smelting/firebrick_manual_only`); 

    ['ingot', 'ball'].forEach((MoldType) => {

        event.recipes.gtceu
            .kiln(id(`${MoldType}_ceramic_casting_mold_firing`))
            .itemInputs(`kubejs:unfired_${MoldType}_ceramic_casting_mold`, `3x #minecraft:coals`)
            .itemOutputs(`kubejs:${MoldType}_ceramic_casting_mold`)
            .duration(240);

    });
    
});