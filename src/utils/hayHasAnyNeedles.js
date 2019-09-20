/* eslint-disable arrow-parens */

// returns `true` if any of the elements in the needles array is in the haystack array
export default function haystackHasAnyNeedles(haystack = [], needles = []) {
  return needles.some(needle => haystack.includes(needle));
}
/* eslint-enable arrow-parens */
