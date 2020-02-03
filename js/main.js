'use strict';

var gCurrQuestIdx = 0;
var gQuests = createQuests();
var gModal = false;


function initGame() {
    renderQuest();
}

function resetGame() {
    gCurrQuestIdx = 0;
    initModal();
    initGame();
}

function createQuests() {
    var quests = [
        {
            id: 1,
            opts: ['Monkey can play.', 'Monkey can sing.', 'Monkey have idea.'],
            correctOptIndex: 2,
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
    var quest = gQuests[gCurrQuestIdx];
    var elImg = document.querySelector('.ques-img');
    elImg.src = quest.img;

    var strHtml = '';

    for (var i = 0; i < quest.opts.length; i++) {
        strHtml += `<li><button class="btn" onclick="checkAnswer(${i})">${gQuests[gCurrQuestIdx].opts[i]}</button></li>`;
    }
    var elDivBtn = document.querySelector('.answers-btn');
    elDivBtn.innerHTML = strHtml;
}

function checkAnswer(optIdx) {
    if (gModal) return;
    if (optIdx === gQuests[gCurrQuestIdx].correctOptIndex) {
        gCurrQuestIdx++;
        if (gCurrQuestIdx === gQuests.length) return initModal();
        renderQuest();
    }
}

function initModal() {
    gModal = !gModal;
    var elModal = document.querySelector('.modal');
    elModal.classList.toggle('active');
}
