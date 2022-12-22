export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line
        resolve({ firstName, lastName });
    reject();
  });
}
