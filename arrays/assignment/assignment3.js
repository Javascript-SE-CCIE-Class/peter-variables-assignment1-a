
let peter = {
    name: `peter`,
    gender: `male`,
    height: `tall`,
};
let {
    name: a,
    gender: b,
    height: c,
} = {...peter}

console.log(`a = ${a},`, `b = ${b},`, `c = ${c}\n`);
let John = Object.assign(
    {},
    {
        a,
        b,
        c,
    }
);

console.log(`john is=\n`, John);