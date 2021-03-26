import React, {Component} from "react";
import classes from './Drawer.module.scss';
import {NavLink} from "react-router-dom";
import Backdrop from "../../UI/Backdrop/Backdrop";
import navList from "../../../constants/Navigation/Navigation";


class Drawer extends Component {
    clickHandler = () => {
        this.props.onClose()
    }
    renderLinks() {
        return navList.map((link, index) => {
            return (
                <li key={index}>
                    <NavLink
                      to={link.route}
                      exact={link.exact}
                      activeClassName={classes.active}
                      onClick={this.clickHandler}
                    >
                        { link.text }
                    </NavLink>
                </li>
            )
        })
    }
    render() {
        const cls = [classes.drawer]
        if (!this.props.isOpen) {
            cls.push(classes.close)
        }
        return (
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    { this.renderLinks()  }
                </ul>
            </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onClose}/> : null }
            </React.Fragment>
        )
    }
}
export default Drawer