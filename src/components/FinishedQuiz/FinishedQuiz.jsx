import React from "react";
import classes from './FinishedQuiz.module.scss'
import Button from "../UI/Button/Button";

const FinishedQuiz = props => {
    const successCount = Object.keys(props.results).reduce((total, key) => {
        if (props.results[key] === 'success') {
            total++
        }
        return total
    }, 0)
    return (
        <div className={classes.finishedQuiz}>
         <ul className={classes['finishedQuiz__list']}>
             { props.quiz.map((quizItem, index) => {
                 const cls = [
                     'fa',
                     props.results[quizItem.id] === 'error' ? 'fa-times' : 'fa-check',
                     classes[props.results[quizItem.id]]
                 ]
                 return (
                     <li
                         key={index}
                     >
                     <strong>{index + 1}</strong>. &nbsp;
                         {quizItem.question}
                         <i className={cls.join(' ')}/>
                     </li>
                 )

             })}
             {/*<li className={classes['finishedQuiz__item']}>*/}
             {/*    <strong>1.</strong>*/}
             {/*    How are you*/}
             {/*    <i className={'fa fa-times '+ classes['finishedQuiz__icon'] + classes.error}/>*/}
             {/*</li>*/}
             {/*<li className={classes['finishedQuiz__item']}>*/}
             {/*    <strong>2.</strong>*/}
             {/*    How are you*/}
             {/*    <i className={'fa fa-check ' + classes['finishedQuiz__icon'] + classes.success}/>*/}
             {/*</li>*/}
         </ul>
            <p>Правильно {successCount} из {props.quiz.length}</p>
            <div>
                <Button onClick={props.onRetry} type="primary">Повторить</Button>
                <Button type="success">Перейти в список тестов</Button>
            </div>
        </div>
    )
}
export default FinishedQuiz