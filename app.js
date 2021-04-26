'use strict'

let userName=prompt('please enter your name');
console.log(' Hello ' + userName);
alert(' Hello '+ userName )

let me = prompt('Do I love Enemy movies?')
console.log(me);

switch (me) {
    case 'yes':
        alert('that is correct')
       break;
    case 'no' : 
    alert('no i love the enemy alot')
        break;
        default:
            alert('please answer yes or no')
            break;
}

let breaking = prompt('Do I love breaking bad movie?')
console.log(breaking);

switch (breaking) {
    case 'yes':
        alert('wrong answer')
        break
    case 'no': 
    alert('correct answer you are great!')
    break;
    default:
        alert('please answer yes or no')
        break;
}
let calm = prompt('Do I love the calm?')
console.log(calm);

switch (calm) {
    case 'yes':
        alert('that is correct')
        break
    case 'no' : 
    alert('no you are dont know me yet')
    break;

 default:
            alert('please answer yes or no')
            break;
}

let dark = prompt('Do I love dark movie?')
console.log(dark);

switch (dark) {
    case 'yes':
        alert('that is correct')
        break
    case 'no' : 
    alert('no i love dark so much')
    break;
    default:
        alert('please answer yes or no')
        break;

}
let book = prompt('Do I love reading books?')
console.log(book);

switch (book) {
    case 'yes':
        alert('Nice that is correct ')
        break
    case 'no' : 
    alert('no i love the books alot')
    break;
    default:
        alert('please answer yes or no')
        break;
}