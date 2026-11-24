ServerEvents.recipes((event) => {
    const id = global.id;

    const Coals = global.CoalTypes;

    const coalTier = (tier) => {

        const coalValues = Coals[tier];
        if (!coalValues) return;

        const {
            material,
            defaultUseQuantity,
            durationModifier,
            blockVarient,
            ashType
        } = coalValues;

        let materialTag = `#minecraft:${material}`;

        let blockTag = blockVarient == '' ? false : `#minecraft:${blockVarient}`;

        const RuggedRecipe = (ore,metal,durationScaler,baseFuelQuantity) => {          
            const mod = metal == 'iron' ? 'minecraft' : 'gtceu';

            event.recipes.gtceu
                .rugged_alloyer(id(`${ore}_${metal}_via_${material}`))
                .itemInputs(`2x kubejs:${ore}_crushed_ore_chunk`,`1x ${mod}:${metal}_nugget`)
                .itemInputs(`${baseFuelQuantity * defaultUseQuantity}x ${materialTag}`)
                .itemOutputs(`#forge:ingots/${metal}`, `gtceu:tiny_${ashType}_dust`)
                .duration(durationScaler * durationModifier);

            if(material !== 'poor_coals'){

                event.recipes.gtceu
                    .rugged_alloyer(id(`mega_${ore}_${metal}_via_${material}`))
                    .itemInputs(`8x gtceu:crushed_${ore}_ore`,`2x #forge:ingots/${metal}`)
                    .itemInputs(`${baseFuelQuantity * defaultUseQuantity}x ${blockTag}`)
                    .itemOutputs(`2x #forge:storage_blocks/${metal}`, `2x gtceu:${ashType}_dust`)
                    .duration(9 * durationScaler * durationModifier);

            }
        };

        RuggedRecipe('hematite','iron',200,1);
        RuggedRecipe('pyrite','iron',200,1);
        RuggedRecipe('magnetite','iron',200,1);
        RuggedRecipe('cassiterite','tin',200,1);
        RuggedRecipe('sphalerite','zinc',200,1);
        RuggedRecipe('chalcopyrite','copper',200,1);
        RuggedRecipe('chalcocite','copper' ,200,1);

        if(material !== 'poor_coals'){

            event.recipes.gtceu
                .rugged_alloyer(id(`andesite_alloy_via_${material}`))
                .itemInputs('4x exnihilosequentia:andesite_pebble', '4x gtceu:zinc_nugget', `${defaultUseQuantity}x ${materialTag}`)
                .itemOutputs('4x create:andesite_alloy', `gtceu:tiny_${ashType}_dust`)
                .duration(400 * durationModifier);

            event.recipes.gtceu
                .rugged_alloyer(id(`mega_andesite_alloy_via_${material}`))
                .itemInputs('16x exnihilosequentia:crushed_andesite', '8x gtceu:zinc_ingot', `${defaultUseQuantity}x ${blockTag}`)
                .itemOutputs('64x create:andesite_alloy', `2x gtceu:${ashType}_dust`)
                .duration(400 * durationModifier * 9);

        }
    };

    coalTier('poor');
    coalTier('standard');
    coalTier('rich');
        
    const chunkSmelt = (ore,metal) => {
        const mod = metal == 'iron' ? 'minecraft' : 'gtceu';

        event
            .smelting(`2x ${mod}:${metal}_nugget`, `kubejs:${ore}_crushed_ore_chunk`)
            .id(`insanity_skies:smelting/${ore}_crushed_ore_chunk_manual_only`);
            
    };

    chunkSmelt('hematite','iron');
    chunkSmelt('pyrite','iron');
    chunkSmelt('magnetite','iron');
    chunkSmelt('cassiterite','tin');
    chunkSmelt('sphalerite','zinc');
    chunkSmelt('chalcopyrite','copper');
    chunkSmelt('chalcocite','copper' );

});