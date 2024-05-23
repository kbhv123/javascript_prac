/*const card_data = [
    
    {
        name: "Dinosaur",
        size: "13mm"
    }
]*/

document.addEventListener('DOMContentLoaded', () => {
    const card_data = [
    
        {
            name: "Dinosaur",
            size: "13mm"
        },
        {
            name: "test",
            size: "15mm"
        }
    ];


const cardList = document.getElementById('card-list') 

card_data.forEach((card, index) => {
    
    const cardDiv = document.createElement('div');
    cardDiv.className = 'card';
    cardDiv.setAttribute('key', index)


    const cardName = document.createElement('p');
    const cardSize = document.createElement('p');


    cardName.textContent = card.name;
    cardSize.textContent = card.size;
    

    cardDiv.appendChild(cardName);
    cardDiv.appendChild(cardSize);
    cardList.appendChild(cardDiv);
});


});