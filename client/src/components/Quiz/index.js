import React from 'react';

const Quiz = () => {

    let choices = {
        a: "Heisenberg",
        b: "Saul Goodman",
        c: "Skinny Pete"
    }

    let answer = choices.a;
    let btn = document.getElementById('button');
    let element = document.getElementById('quiz');

    function checkAnswer() {
        if (btn.text === answer) {
            element.append(
                <h3>Correct!</h3>
            )
        }

        else {
            <h4>Wrong!</h4>
        }

    return (
        <div id="quiz">
            <h1>Quiz</h1>
            <h3>What's Walter White's Alias?</h3>
            <button onClick={checkAnswer} id="btn" class="btn">{choices.a}</button>
            <button onClick={checkAnswer} id="btn" class="btn">{choices.b}</button>
            <button onClick={checkAnswer} id="btn" class="btn">{choices.c}</button>
        </div>
    )
    }
}

export default Quiz;