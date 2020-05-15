import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

 class QuizQuestion extends Component {
    handleClick(buttonText)  {
        buttonText === this.props.quiz_question.answer ? this.props.showNextQuestionHandler() : ''
    };

    render() {
        const answerList = this.props.quiz_question.answer_options.map((q, index) =>{
            return <QuizQuestionButton key={index} button_text={this.props.quiz_question.answer_options[index]}
            clickHandler={this.handleClick.bind(this)} />;
        });

        return (
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ul>
                        {answerList}
                    </ul>
                </section>

            </main>
        )
    }
}

export default QuizQuestion