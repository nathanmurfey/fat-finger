var names = ['Nathan', 'Heli', 'Brendan', 'Yianni'];

names.forEach(function (name) {
    console.log('For each', name);
})

names.forEach((name) => {
    console.log('ArrowFunc', name);
})

names.forEach((name) => console.log('single line', name));