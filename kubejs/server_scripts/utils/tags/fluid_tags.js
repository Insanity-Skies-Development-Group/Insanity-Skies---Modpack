
ServerEvents.tags('fluid', (event) => {
    event.remove('create:bottomless/allow', 'minecraft:lava');
    event.remove('create:bottomless/allow', 'minecraft:water');
});