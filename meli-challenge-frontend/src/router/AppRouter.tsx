import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from '../components/home';
import ItemDetails from '../components/item-details';
import SearchResults from '../components/search-results';


const AppRouter = () => {

  return (
    <Router>
        <Switch>
            <Route 
                exact path="/"
                component={Home}
            />
            <Route 
                exact path="/items"
                component={SearchResults}
            /> 
            <Route 
                path="/items/:id"
                component={ItemDetails}
            />
        </Switch>
    </Router>
  )
}

export default AppRouter;