export default function groceriesList() {
  const map = new Map();
  const obj = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };
  for (const key of Object.keys(obj)) {
    map.set(key, obj[key]);
  }
  return map;
}
