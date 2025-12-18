export function findObjectInArray(
  array,
  value,
  key
 ) {
  for (let obj of array) {
    if (obj[key] === value)
      return obj;
  }
  return null;
}