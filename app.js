'use strict'
let score =0 ;
let userName=prompt('please enter your name');
console.log(' Hello ' + userName);
alert(' Hello '+ userName )

let me = prompt('Do I love Enemy movies?')
console.log(me);

switch (me.toLowerCase()) {
    case 'yes':
        case 'y':
        alert('that is correct')
        score++
        alert('Great Work your score is ' + score);
       break;
    case 'no' : 
    case 'n' :
    alert('no i love the enemy alot')
        break;
        default:
            alert('please answer yes or no')
            break;
}

let breaking = prompt('Do I love breaking bad movie?')
console.log(breaking);

switch (breaking.toLowerCase()) {
    case 'yes':
        case 'y':
        alert('wrong answer')
       
        break
    case 'no': 
    case 'n' :
    alert('correct answer you are great!')
    score++
    alert('Great Work your score is ' + score);
    break;
    default:
        alert('please answer yes or no')
        break;
}
let calm = prompt('Do I love the calm?')
console.log(calm);

switch (calm.toLowerCase()) {
    case 'yes':
        case 'y':
        alert('that is correct')
        score++
        alert('Great Work your score is ' + score);
        break
    case 'no' :
        case 'n' : 
    alert('no you are dont know me yet')
    break;

 default:
            alert('please answer yes or no')
            break;
}

let dark = prompt('Do I love dark movie?')
console.log(dark);

switch (dark.toLowerCase()) {
    case 'yes':
        case 'y':
        alert('that is correct')
        score++
        alert('Great Work your score is ' + score);
        break
    case 'no' : 
    case 'n' :
    alert('no i love dark so much')
    break;
    default:
        alert('please answer yes or no')
        break;

}
let book = prompt('Do I love reading books?')
console.log(book);

switch (book.toLowerCase()) {
    case 'yes':
        case 'y':
        alert('Nice that is correct ')
        score++
        alert('Great Work your score is ' + score);
        break
    case 'no' :
        case 'n' : 
    alert('no i love the books alot')
    break;
    default:
        alert('please answer yes or no')
        break;}

//let score = 0;
//let question6 = prompt('Do I Love Weaking Dead?');

/*switch (question6.toLowerCase()) {
    case 'yes':
    case 'y':
        alert('correct I Love It So Much');
        score++
        alert('Great Work your score is ' + score);
        break;
    case 'no':
    case 'n':
        alert(' sorry your score is  ' + score + ' please try again ');

        break;*/


for (let i = 0; i < 4; i++) {
    let question6 = prompt('Do I Love Weaking Dead?');
    console.log(i)

    console.log(question6)
    // let question6 = prompt('Do I Love Weaking Dead?');
    switch (question6.toLowerCase()) {
        case 'yes':
        case 'y':
            alert('correct I Love It So Much');
            score++
            alert('Great Work your score is ' + score);
            break;
        case 'no':
        case 'n':
            alert ('again please you have also three chances' );

            alert(' sorry your score is  ' + score + ' please try again ');
        //question6 = prompt('Do I Love Weaking Dead?');
        break;

    }
    console.log(question6)
    if  (question6.toLowerCase()=='yes' || question6.toLowerCase()=='y') {

    
        break;
    }
    





}
console.log('130')

//console.log(score);
alert('your score is ' + score)



/*let Answer = ['Dark', 'weaking dead' ,'frinds' , 'viking' ];

let question7 = prompt('What Is My Fav Movie ? ', 'please choose Dark, weaking dead ,frinds , viking ');
//for (let i = 0; i < 5; i++) {

    prompt('What Is My Fav Movie ? ', 'please choose Dark, weaking dead ,frinds , viking ');


switch (question7.toLowerCase()) {
    case 'Dark':

        alert('correct I Love It So Much')
        score++
        alert('Great Work your score is ' + score)
        break;
    case 'weaking dead':

        alert('correct I Love It So Much')
        score++
        alert('Great Work your score is ' + score)

        break;

    case 'frinds':

        alert('correct I Love It So Much')
        score++
        alert('Great Work your score is ' + score)
        break;

    case 'viking':

        alert('correct I Love It So Much')
        score++
        alert('Great Work your score is ' + score)
        break;


    default :
        alert('again please you have also five chances')

        alert(' Game Over Your Score Is  ' + score + ' The Correct Is I love Dark, weaking dead ,frinds , viking  ')

        
        alert(' Game Over Your Score Is  ' + score + ' The Correct Is I love Dark, weaking dead ,frinds , viking  ')

       for (let i = 0; i < 5; i++) {

            prompt('What Is My Fav Movie ? ', 'please choose Dark, weaking dead ,frinds , viking ');
        }
        break;
    }*/
       
    
    
console.log ('your score is ' + score)



for (let j= 0; j < 6; j++) {
    let question7 = prompt('What Is My Fav Movie ? ', 'please choose Dark, weaking dead ,frinds , viking ');
    console.log(j)

    console.log(question7)
    // let question6 = prompt('Do I Love Weaking Dead?');
    switch (question7.toLowerCase()) {
        case 'Dark':
        
            alert('correct I Love It So Much');
            score++
            alert('Great Work your score is ' + score);
            break;
        case 'frinds':
       
            alert ('correct I Love It So Much' );
            score++
            alert('Great Work your score is ' + score);
        //question6 = prompt('Do I Love Weaking Dead?');
        break;
        case 'walking dead':
        
            alert('correct I Love It So Much');
            score++
            alert('Great Work your score is ' + score);
            break;
            case 'viking':
        
            alert('correct I Love It So Much');
            score++
            alert('Great Work your score is ' + score);
            break;

            default :
            alert ('again please you have also another chances' );

            alert(' sorry your score is  ' + score + ' please try again ');
        //question6 = prompt('Do I Love Weaking Dead?');
        break;

    }
   console.log(question7)
    if  (question7.toLowerCase()=='frinds' || question7.toLowerCase()=='Dark' || question7.toLowerCase()=='walking dead' || question7.toLowerCase()=='viking') {

    
        break;
    }
    





}
console.log('130')

//console.log(score);
alert('your score is ' + score)

    
