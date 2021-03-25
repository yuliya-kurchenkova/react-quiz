import React, {Component} from 'react';
import Layout  from "./components/Layout/Layout";
import './assets/scss/style.scss';
import Quiz from "./containers/Quiz/Quiz";


class App extends Component {
    render() {
        return (
            <Layout>
            <Quiz/>
            </Layout>
        );
    }
}
export default App
