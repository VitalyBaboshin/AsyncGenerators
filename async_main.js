async function *counter(begin, end, delta) {
    let value = begin;
    let nextValue = begin + delta;
    while (end > value) {
        value = nextValue;
        nextValue += delta;

        if (nextValue > end) return value;
        const back = yield value;
        if (back) {
            value += back;
            nextValue += back;
            if (nextValue > end) return ;
        }
    }
}

const c = counter(0, 180, 12);
(async () => {
    const val1 = await c.next(190);
    const val2= await c.next();
    console.log(val1, val2)
}) ()
// c.next().then(console.log);
// const val2 = c.next().then(console.log);
// const val3 = c.next(150).then(console.log);
// const val4 = c.next().then(console.log);
// console.log({c, val1, val2, val3, val4})