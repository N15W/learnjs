
// inefficient function for checking whether an entry in a string array includes a non-alpha char

function cleanInputString(str) {
    const strArray = str.split('');
    let cleanStrArray = [];
    for (let i = 0; i < strArray.length; i++) {
        if (!["+", "-", " "].includes(strArray[i])) {
            cleanStrArray.push(strArray[i]);
        }
    }
}