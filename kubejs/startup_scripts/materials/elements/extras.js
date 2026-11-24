GTCEuStartupEvents.registry('gtceu:element', (event) => {
    const elem = global.elementFunction(event);

    elem('mystery', 0, 0, '?');

});