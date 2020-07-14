function returnSex(sex) {
    // Masculine , Feminine
    // if (sex === 'M') {
    //     return 'Masculine';
    // } else if (sex === 'F') {
    //     return 'Feminine';
    // } else {
    //     return 'Sem';
    // }
    switch (sex) {
        case 'M':
            return 'Masculine';
        case 'F':
            return 'Feminine';
        default:
            return 'Sem'
    }
}

var result = returnSex('A');
console.log("Sex: " + result);