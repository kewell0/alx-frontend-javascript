export default function getResponseFromAPI() {
  const flag = true;
  return new Promise((resolve, reject) => {
    if (flag) {
      resolve();
    } else {
      reject();
  }
  })
}
