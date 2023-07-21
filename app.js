let favNumber = 16;
let baseURL = "http://numbersapi.com";


// #1
$.getJSON(`${baseURL}/${favNumber}/?json`).then(data=>
    {console.log(data);
    })

// #2
let favNumbers = [3, 16, 24]
$.getJSON(`${baseURL}/${favNumbers}/?json`).then(data=>
    {console.log(data);
    })

// #3

// Promise.all(
//     Array.from({ length: 4 }, () => {
//       return $.getJSON(`${baseURL}/${favNumber}?json`);
//     })
//   ).then(facts => {
//     facts.forEach(data => $("body").append(`<p>${data.text}</p>`));
//   });


// DECK OF CARDS PORTION---------------------------------------------------------------------------------

// #1

$.getJSON('https://deckofcardsapi.com/api/deck/new/draw/?count=1').then(data =>{
    let {suit, value} = data.cards[0];
    console.log(`${value.toLowerCase()} of ${suit.toLowerCase()}`)
})


// #2

// let firstCard = null;
// $.getJSON('https://deckofcardsapi.com/api/deck/new/draw/').then(data =>{
//     console.log(data);
//     let deckId = data.deck_id;
//     firstCard = data.cards[0]
//     return $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`);
// }).then(data =>{
//     let secondCard = data.cards[0];
//     [firstCard, secondCard].forEach(function(card){
//         console.log(`${card.value.toLowerCase()} of ${card.suit.toLowerCase()}`)}
//     )
// })

// #3

let firstCard = null;
let $btn = $('button');
let $cardArea = $('#card-area');
let deckId = null;

$.getJSON('https://deckofcardsapi.com/api/deck/new/shuffle/').then(data=>{
    deckId = data.deck_id;
    $btn.show();
})

$btn.on('click', function(){
    $.getJSON(`https://deckofcardsapi.com/api/deck/${deckId}/draw/`).then(data =>{
        console.log(data);
        let cardSrc = data.cards[0].image;
        $cardArea.append(
            $('<img>', {
              src: cardSrc
            })
          );
          if (data.remaining === 0) $btn.remove();
    }) 
})

