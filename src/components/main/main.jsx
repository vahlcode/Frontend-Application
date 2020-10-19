import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './main.css'

//Importing pages
import Dashboard from '../../pages/dashboard/dashboard'
import Account from '../../pages/account/account'
import Company from '../../pages/company/company'
import Settings from '../../pages/settings/settings'
import News from '../../pages/news/news'
import Analytics from '../../pages/analytics/analytics'

function Main() {
    return (
        <main>
            <Router>
                <Route exact path='/account' component={Account} />
                <Route exact path='/company' component={Company} />
                <Route exact path='/settings' component={Settings} />
                <Route exact path='/news' component={News} />
                <Route exact path='/analytics' component={Analytics} />
                <Route exact path='/' component={Dashboard} />
            </Router>
        </main>
    )
}

export default Main