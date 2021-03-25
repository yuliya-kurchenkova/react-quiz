import React from "react";
import classes from './ActiveQuiz.module.scss';
import AnswerList from "./AnswerList/AnswerList";

const ActiveQuiz = props => (
    <div className={classes.activeQuiz}>
        <p className={classes['activeQuiz__question']}>
        <span>
            <strong>{props.answerNumber}</strong>&nbsp;
          {props.question}
        </span>
            <small>{props.answerNumber} из { props.quizLenght }</small>
        </p>

       <AnswerList
        state={props.state}
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
       />
    </div>
)
export default ActiveQuiz