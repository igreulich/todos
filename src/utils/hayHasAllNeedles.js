/* eslint-disable arrow-parens */

// returns `true` if every element in the needles array is in the haystack array
export default function haystackHasAllNeedles(haystack = [], needles = []) {
  const noNeedles = needles.length;

  /* `every` acts like the "for all" quantifier in mathematics.
   * In particular, for an empty array, it returns true.
   * (It is vacuously true that all elements of the empty set satisfy any given condition.)
   *
   * Practically this means `[].every([literally any condition]);` will always return true.
   * While being technically true, (as every element in the collection does meet the condition),
   * for our purposes, it is backwards. So we need to deal with that possiblity.
   */
  return noNeedles ? needles.every(needle => haystack.includes(needle)) : false;
}
/* eslint-enable arrow-parens */
