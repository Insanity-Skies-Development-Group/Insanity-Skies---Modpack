
ServerEvents.recipes((event) => {
    const id = global.id;

    const primitive_processing = [
        { primary: 'hematite', secondary: 'magnetite', tertiary: 'nickel' },
        { primary: 'chalcopyrite', secondary: 'pyrite', tertiary: 'lead' },
        { primary: 'sphalerite', secondary: 'zinc', tertiary: 'gallium' },
        { primary: 'cassiterite', secondary: 'tin', tertiary: 'bismuth' },
        { primary: 'chalcocite', secondary: 'sulfur', tertiary: 'silver' },
        { primary: 'magnetite', secondary: 'gold', tertiary: 'iron' },
        { primary: 'pyrite', secondary: 'sulfur', tertiary: 'antimony' },
    ];

    primitive_processing.forEach((material) => {
        event.recipes.gtceu
            .primitive_ore_processing(id(`crushed_${material.primary}_ore`))
            .itemInputs(`gtceu:crushed_${material.primary}_ore`, '2x #minecraft:coals')
            .inputFluids('minecraft:water 500')
            .itemOutputs(`gtceu:${material.primary}_dust`)
            .chancedOutput(`gtceu:${material.primary}_dust`, 2500, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 2500, 0)
            .duration(400);
        event.recipes.gtceu
            .steam_ore_processing(id(`crushed_${material.primary}_ore`))
            .itemInputs(`gtceu:crushed_${material.primary}_ore`)
            .inputFluids('minecraft:water 500')
            .itemOutputs(`gtceu:${material.primary}_dust`)
            .chancedOutput(`gtceu:${material.primary}_dust`, 2500, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 2500, 0)
            .duration(320)
            .EUt(GTValues.VA[GTValues.LV]);

        // Chunk Processing
        event.recipes.gtceu
            .primitive_ore_processing(id(`${material.primary}_crushed_ore_chunk`))
            .itemInputs(`3x kubejs:${material.primary}_crushed_ore_chunk`, '2x #minecraft:coals')
            .inputFluids('minecraft:water 500')
            .chancedOutput(`gtceu:${material.primary}_dust`, 9000, 0)
            .chancedOutput(`gtceu:${material.secondary}_dust`, 1500, 0)
            .duration(480);
    });

});