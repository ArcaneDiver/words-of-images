import * as path from 'path';
import Jimp from 'jimp/browser';

import {
  genAlphabet,
  mapAlphabetToColor,
  textToColor,
  breaksVectorIntoMatrix,
} from '@words-of-images/core';

import { readFile } from './file';

export async function cli(): Promise<void> {
  const resolvedPath = path.resolve('./assets/1.1');
  const text = await readFile(resolvedPath);

  const alphabet = genAlphabet(text);
  const map = mapAlphabetToColor(alphabet);

  const vector = textToColor(text, map);
  const matrix = breaksVectorIntoMatrix(vector);
}
