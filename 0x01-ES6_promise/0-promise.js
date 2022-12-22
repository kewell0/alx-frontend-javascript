function getResponseFromAPI() {
    let flag = true;
    return new Promise((resolve, reject) => {
        if (flag) {
            resolve();
        } else {
            reject();
        }
    })
}
