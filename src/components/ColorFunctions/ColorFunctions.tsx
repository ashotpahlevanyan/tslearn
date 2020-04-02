// TODO implement hexToRgb
export function hexToRgb(hex: string): {r: number, g: number, b: number} {
    if(hex.length === 3) {
        let hr = hex[0];
        let hg = hex[1];
        let hb = hex[2];
        return hexToRgb(`${hr}${hr}${hg}${hg}${hb}${hb}`);
    }

    let [r, g, b] = [0, 2, 4]
        .map(offset => hex.substring(offset, offset + 2)) // ['ff', '00', '00']
        .map(hexCh => parseInt(hexCh, 16));

    return {r, g, b};
}

//TODO implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string  {
    return [r, g, b]
        .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
        .map(hexCh => hexCh.length === 1 ? `0${hexCh}` : hexCh)
        .join('');
}
