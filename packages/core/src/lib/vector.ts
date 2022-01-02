import { nextPerfectSquare } from '@words-of-images/utils';
import { defaultRGB } from './core';
import type { RGBColor } from './core';

export const breaksVectorIntoMatrix = (
  vector: Array<RGBColor>
): Array<Array<RGBColor>> => {
  const length = nextPerfectSquare(vector.length);

  return Array.from({
    length: Math.sqrt(length),
  }).map((_, i) => {
    const slice = vector.slice(
      i * Math.sqrt(length),
      (i + 1) * Math.sqrt(length)
    );

    return Math.sqrt(length) === slice.length
      ? slice
      : slice.concat(
          Array.from<RGBColor>({
            length: Math.sqrt(length) - slice.length,
          }).fill(defaultRGB)
        );
  });
};
