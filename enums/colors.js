// @flow

// From https://github.com/facebook/flow/issues/627#issuecomment-389668600

// Pay special attention to:
// 1. We are casting each value to its own, as otherwise all of them would be strings
// 2. Freezing would be strictly required if we weren't casting each value to its
//    own (1), but as we are, its becomes optional here from the flow point of view
const all = Object.freeze({
  green: ('COLOR_GREEN': 'COLOR_GREEN'),
  red: ('COLOR_RED': 'COLOR_RED'),
  yellow: ('COLOR_YELLOW': 'COLOR_YELLOW'),
});

type Color = $Values<typeof all>;

// optional but sometimes useful too
// we are casting to any as Object.values returns Array<mixed> and mixed can't be casted
const values: Array<Color> = Object.freeze((Object.values(all): any));

export { all as default, values };

export type { Color };
