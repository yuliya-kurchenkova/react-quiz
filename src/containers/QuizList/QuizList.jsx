import React, {Component} from 'react';
import classes from './QuizList.module.scss'
import {NavLink} from "react-router-dom";

export default class QuizList extends Component {
    renderQuizes() {
        return [1, 2, 3].map((quiz, index) => {
            return (
                <li
                  key={index}
                >
                    <NavLink to={'/quiz/' + quiz}>
                       Тест {quiz}
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        return (
            <div className={classes.quizList}>
                <h1 className='title'>Список тестов</h1>

                <ul className='list'>
                    { this.renderQuizes()}
                </ul>
            </div>
        )
    }
}