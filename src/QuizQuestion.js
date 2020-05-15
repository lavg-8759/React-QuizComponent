import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton.js'

 class QuizQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {incorrectAnswer: false};
    }

    handleClick(buttonText)  {
        if(buttonText === this.props.quiz_question.answer) {
            this.props.showNextQuestionHandler();
            this.setState( (state) => { return {incorrectAnswer: false}})
        } else {
            this.setState( (state) => { return {incorrectAnswer: true}})
        }
    };

    render() {
        const answerList = this.props.quiz_question.answer_options.map((q, index) =>{
            return <QuizQuestionButton key={index} button_text={this.props.quiz_question.answer_options[index]}
            clickHandler={this.handleClick.bind(this)} />;
        });

        return (
            <main>
                {this.state.incorrectAnswer ? <p className="error">Sorry, that's not right</p> : null }
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