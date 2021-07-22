// Code your solutions in this file

function writeCards(name, event){
    const thankYouCard =[];
    for (let i = 0; i < name.length; i++){
        let message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
        thankYouCard.push(message)
       
    };
    return thankYouCard;
}

function countDown(num){
    
    while (num > -1){
        console.log(num);
        num--;
    }
}
