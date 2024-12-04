function erzeuge_ID() {
    const jetzt = new Date();
    const jahr = jetzt.getFullYear();
    const monat = String(jetzt.getMonth() + 1).padStart(2, '0');
    const tag = String(jetzt.getDate()).padStart(2, '0');
    const stunden = String(jetzt.getHours()).padStart(2, '0');
    const minuten = String(jetzt.getMinutes()).padStart(2, '0');
    const sekunden = String(jetzt.getSeconds()).padStart(2, '0');
    const millisekunden = String(jetzt.getMilliseconds()).padStart(3, '0');
    const hundertstelSekunden = millisekunden.slice(0, 2);
    
    return `${jahr}${monat}${tag}${stunden}${minuten}${sekunden}${hundertstelSekunden}`;
}

function einfacherRandomSeed(seed) {
    seed = Number(seed);
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = (s * a) % m) / m;
    };
}

function XorshiftRandomSeed(seed) {
    seed = Number(seed);
    var x = seed;
    return function () {
        x ^= x << 13;
        x ^= x >> 17;
        x ^= x << 5;
        return (x >>> 0) / 4294967296;
    };
}
