function blackJack(strArr){
    let cards = {
        'two':2,
        'three':3,
        'four':4,
        'five':5,
        'six':6,
        'seven':7,
        'eight':8,
        'nine':9,
        'ten':10,
        'jack':10,
        'queen':10,
        'king':10,
        'ace':11
    }
    let totalValue = 0
    let hasAce = false;
    let highCard = null
    for(let i = 0; i<strArr.length;i++){
        const cardValue = cards[strArr[i]]
        totalValue += cardValue
        if(strArr[i]=='ace'){
            hasAce = true
        }
        if(!highCard || cardValue >= cards[highCard]){
            highCard = strArr[i]
        }
    }
    if(totalValue > 21) return 'above '+highCard
    if(totalValue < 21) return 'beloe '+highCard
    if(totalValue == 21) return 'blackjack '+highCard
}
console.log(blackJack(["four","ten","king"]))
console.log(blackJack(["ten","ace"]))