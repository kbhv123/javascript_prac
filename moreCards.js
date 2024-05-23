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


