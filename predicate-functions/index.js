// @flow

// Interactive demo on Try Flow: https://flow.org/try/#0PTAEGEHsFsAcEMBOBTUAXAFgSwM4DoCAoAE2QGMAbJVAMwFcA7MtLSB0XAZTUSwYHNQACgBu8CnWQAuUDh59+AShk9JAbhLkqKUPSYs2HHN14DhYidNDwGAT2W7xOZBsJ7mrdl3lmh8RaAA3oSgoChodIjsaLawyJA01qAAvKmgAORypvzpGgC+hIQgoJxYcBSoZPDOOKAA7pCIANaEQt7ZQunw6Q6qyIoabcY+-EIAjA40Tv2uxQCyjZUwsBUAHqBVNaDEbOlo9Y1NUpqU1KBiiNYyAPxZCoPtCn6T0wOgxQCiiIiNwnxkjRQzEUhWKBDw8H48D4cnQ2BwxyKYAAQsg0GhkJcYnEyBhyE0FKA6DhCQBSXH4nBI0AAJWQNBkGHRsARIBoFEgdTwjX4wGQDGAOzIOGA2OQIvcBgYIoAxGhIGQALSwFDELBVDGKyWeKnawyPAQAJmeMnJeLITVqwVC4Ui0Vi8US8BSaUyI1yhAKbkYHkMAKY8DQfhudwEABpQAAjEMjByhwTWjiJIYmBTG-ygABkmaMqaNQkjigCiZtaLtSQA1FGNKECqWIlEMh68kA
// More information in this GitHub Issue: https://github.com/facebook/flow/issues/34

// Compare this...
declare function isString(value: string): true;
declare function isString(value: any): false;

function isString(a) {
  return typeof a === 'string';
}

// Simple cases work
(isString('a'): true);
(isString(1): false);

// More complex cases don't work:
declare var a: ?string;
// $FlowFixMe This shouldn't be an error but it is
(isString(a): false); // Error (incorrect)

// ...against this:

// Better typechecking using %checks
// Ref: https://flow.org/en/docs/types/functions/#toc-predicate-functions
function isString2(a): %checks {
  return typeof a === 'string';
}

function concat(a: ?string, b: ?string): string {
  if (isString2(a) && isString2(b)) {
    return a + b;
  }
  return '';
}
