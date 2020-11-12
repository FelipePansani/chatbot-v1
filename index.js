let question, output;
let answers = ['Try ChatBot for free for 14 days before you buy it. No credit card required!', 
'We offer 4 different plans for our customers. Check out which one will fit you best by clicking the button below',
"I have many features, and I'll be pleased to tell you more about them!"];

async function assignText() {
    question = document.getElementById('question');
    output = document.getElementById('demo');

    if (question.value.length > 0)
        return res = question.value;
}

async function show() {
    let a = document.createElement('DIV')
    a.setAttribute('class', 'card bg-primary')
    let b = document.createElement('DIV')
    b.setAttribute('class', 'card bg-default')

    text = await assignText()
    a.innerText = text;
    
    setTimeout(() => {
        allScreen.appendChild(a);
    }, 800)

    if (text.match(/trial/)) {
        console.log('Question was about trial')
        b.innerText = answers[0];

        setTimeout(() => {
            allScreen.appendChild(b);
        }, 1000)
    }
    else if (text.match(/price/)) {
        console.log('Question was about pricing')
        b.innerText = answers[1];

        setTimeout(() => {
            allScreen.appendChild(b);
        }, 1000)
    }
}