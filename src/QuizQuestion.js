import React, { Component } from 'react'

export default class QuizQuestion extends Component {
    render() {
        return (
            <main>
                <section>
                    <p>{this.props.instructions_text}</p>
                </section>
                <section className="buttons">
                    <u1>
                        <li>{this.props.quiz_question.answer_options[0]}</li>
                    </u1>
                </section>

            </main>
        )
    }
}
