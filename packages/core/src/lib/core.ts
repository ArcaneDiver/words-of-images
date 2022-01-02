export type RGBColor = {
  r: number;
  g: number;
  b: number;
};

export type Alphabet = Record<string, RGBColor>;

const numberOfColors = 256 * 256 * 256 - 1;

export const defaultRGB: RGBColor = {
  r: 0,
  g: 0,
  b: 0,
};

export const mapAlphabetToColor = (alphabet: Array<string>): Alphabet => {
  const numberOfDivisions = alphabet.length - 1;
  const factor = numberOfColors / numberOfDivisions;

  const map: Alphabet = {};

  alphabet.forEach((e, i) => {
    const number = i * factor;
    const color = decimalToRGBColor(number);

    map[e] = color;
  });

  return map;
};

export const decimalToRGBColor = (number: number): RGBColor => {
  const hex = number.toString(16);

  const zeros = Array.from({ length: 6 - hex.length })
    .fill(0)
    .join();
  return hexToRgb(zeros.concat(hex));
};

const rgbToHex = ({ r, g, b }: RGBColor) =>
  parseInt(
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? '0' + hex : hex;
      })
      .join(),
    16
  );

const hexToRgb = (hexString: string): RGBColor => ({
  r: parseInt(hexString[0] + hexString[1], 16),
  g: parseInt(hexString[2] + hexString[3], 16),
  b: parseInt(hexString[4] + hexString[5], 16),
});

export const genAlphabet = (text: string): Array<string> =>
  Array.from(new Set(text.toLocaleLowerCase().split(''))).sort();

export const textToColor = (
  text: string,
  alphabet: Alphabet
): Array<RGBColor> =>
  text.split('').map((letter) => alphabet[letter] || defaultRGB);
