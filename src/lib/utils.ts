import fs from 'fs';
import prettier, { Options } from 'prettier';

export function prettify(
  file: any,
  options: Options = {
    parser: 'json',
    endOfLine: 'lf',
    semi: true,
    singleQuote: true,
    tabWidth: 2,
    printWidth: 50,
    trailingComma: 'none',
    arrowParens: 'avoid'
  }
) {
  const lines = prettier.format(typeof file === 'string' ? file : JSON.stringify(file), options);
  return lines;
}

export const save = (pathToFile: string, obj: any, isGeojson = false, isJson = true) =>
  fs.writeFileSync(pathToFile, isJson ? prettify(obj) : obj);

export const getEntries = <T extends string | number | symbol, U>(obj: Record<T, U>) => {
  return Object.entries(obj) as [T, U][];
};

export const getValues = <T extends string | number | symbol, U>(obj: Record<T, U>) => {
  return Object.values(obj) as U[];
};

export const getKeys = <T extends string | number | symbol, U>(obj: Record<T, U>) => {
  return Object.keys(obj) as T[];
};


export type Extract<T, U extends T> = T extends U ? T : never;