
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    event.create('reinforced_blast_furnace')
        .category('primitive')
        .setMaxIOSize(3, 3, 0, 0)
		.setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.FURNACE);

});

GTCEuStartupEvents.registry('gtceu:machine', event => {

    event.create('reinforced_blast_furnace', 'primitive')
        .rotationState(RotationState.ALL)
        .recipeType('reinforced_blast_furnace')
		.appearanceBlock(() => Block.getBlock('kubejs:refractory_heat_bricks'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle(' PPP ', ' PPP ', '  P  ', '  P  ', '     ', '     ')
            .aisle('PPPPP', 'PP#PP', ' P#P ', ' P#P ', ' PPP ', ' PPP ')
            .aisle('PPPPP', 'P###P', 'P###P', 'P###P', ' P#P ', ' P#P ')
            .aisle('PPPPP', 'PP#PP', ' P#P ', ' P#P ', ' PPP ', ' PPP ')
            .aisle(' PPP ', ' P@P ', '  P  ', '  P  ', '     ', '     ')
            .where('@', Predicates.controller(Predicates.blocks(definition.get())))
            .where('P', Predicates.blocks('kubejs:refractory_heat_bricks'))
            .where('#', Predicates.blocks('minecraft:air'))
			.where(' ', Predicates.any())
            .build())
        .workableCasingModel('kubejs:block/hardmode/refractory_heat_bricks',
        'gtceu:block/multiblock/primitive_blast_furnace')
        .editableUI(
			global.ui_builder({
				group: 'primitive',
				name: 'reinforced_blast_furnace',
				size: [166, 50],
				background: GuiTextures.BACKGROUND,
				progress: {
					pos: [80, 16],
					size: [20, 20],
					texture: GuiTextures.PROGRESS_BAR_ARROW
				},
				inputs: [
					{ type: 'item', index: 0, pos: [16, 16], texture: GuiTextures.SLOT },
					{ type: 'item', index: 1, pos: [34, 16], texture: GuiTextures.SLOT },
					{ type: 'item', index: 2, pos: [52, 16], texture: GuiTextures.SLOT },
				],
				outputs: [
					{ type: 'item', index: 0, pos: [112, 16], texture: GuiTextures.SLOT },
					{ type: 'item', index: 1, pos: [130, 16], texture: GuiTextures.SLOT }
				],
			})
		);
}); 