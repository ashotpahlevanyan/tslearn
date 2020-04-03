function add(x: number, y: number): number;
function add(x: number, y: number, radix: number): number;

function add(x: number|string,
             y: number|string,
             radix: number=10): number|undefined {

    if(typeof x === 'string' && typeof y === 'string') {
        return parseInt(x, radix) + parseInt(y, radix);
    } else if(typeof x === 'number' && typeof y === 'number') {
        return x + y;
    } else {
        return undefined;
    }
}

