import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { YogaInsert, YogaUpdate } from '../pages'


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/movies/create" exact component={YogaInsert} />
                <Route
                    path="/yoga/update/:id"
                    exact
                    component={YogaUpdate}
                />
            </Switch>
        </Router>
    )
}

export default App