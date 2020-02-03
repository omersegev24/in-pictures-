'use strict';

var gCurrQuestIdx = 0;
var gQuests = createQuests();


function initGame() {
    renderQuest();
}

function resetGame(){
    gCurrQuestIdx = 0;
    var elModal = document.querySelector('.modal');
    elModal.classList
    initGame();

}

function createQuests() {
    var quests = [
        {
            id: 1,
            opts: ['Monkey can play.', 'Monkey have an idea.', 'Monkey can sing.'],
            correctOptIndex: 1,
            img: 'img/1.jpeg'
        },
        {
            id: 2,
            opts: ['The dog can jump.', 'The dog can swim', 'The dog can ride.'],
            correctOptIndex: 1,
            img: 'img/2.jpeg'
        }
    ];
    return quests;
}


function renderQuest() {
    var elImg = document.querySelector('.ques-img');
    var elDivBtn = document.querySelector('.answers-btn');
    elImg.src = gQuests[gCurrQuestIdx].img;

    var strHtml = '';

    for (var i = 0; i < gQuests[gCurrQuestIdx].opts.length; i++) {
        strHtml += `<button class="btn" onclick="checkAnswer(${i})">${gQuests[gCurrQuestIdx].opts[i]}</button>`;
    }
    elDivBtn.innerHTML = strHtml;
}

function checkAnswer(optIdx) {
    if(gCurrQuestIdx === gQuests.length - 1) return openModal();
    if (optIdx !== gQuests[gCurrQuestIdx].correctOptIndex) {
        return;
    } else {
        gCurrQuestIdx++;
        renderQuest();
    }
}

function openModal(){
    var elModal = document.querySelector('.modal');
    elModal.classList.toggle('active');
}
