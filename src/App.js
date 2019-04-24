import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Components/Global/Header';
import Home from './Pages/Home';
import Characters from './Pages/Characters';


class App extends Component {

    render() {

        return (
            <div className="App">
                <Router>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/characters" component={Characters} />
                        <Route path="/characters/:id" component={Characters} />
                    </Switch>
                </Router>
            </div >
        );
    }
}

export default App;
