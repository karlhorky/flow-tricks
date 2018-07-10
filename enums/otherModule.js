// @flow

import colors, { values as colorValues } from './colors';
import type { Color } from './colors';

type SomethingRed = {
  color: typeof colors.red,
};

const thing: SomethingRed = { color: colors.red };

const color1: Color = colors.green;
const color2: Color = colors.red;
const color3: Color = colors.yellow;

console.log(colorValues); // ["COLOR_GREEN", "COLOR_RED", "COLOR_YELLOW"]
