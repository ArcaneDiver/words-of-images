import * as fs from 'fs/promises';

export const readFile = async (path: string): Promise<string> => {
  try {
    const buffer = await fs.readFile(path);
    const text = buffer.toString();

    return text;
  } catch (_) {
    throw new Error("Unable to read file");
  }
};
