export default function cleanSet(set, startString) {
  const subStrings = [];

  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  for (const value of set.values()) {
    if (typeof value === 'string' && value.substring(startString.length)) {
      const valueSubStr = value.substring(startString.length);

      if (valueSubStr && valueSubStr !== value) {
        subStrings.push(valueSubStr);
      }
    }
  }
  return subStrings.join('-');
}
