import React from 'react'
import {Switch, Route, withRouter, useRouteMatch } from 'react-router-dom'
import './settings.css'

//Importing tab components 
import MainInfo from '../../components/userInputTabs/main-info'
import AdditionalInfo from '../../components/userInputTabs/additional-info'
import Tabs from '../../components/userInputTabs/tabs'

function Settings() {
    let { path } = useRouteMatch()
    return (
        <section className="settings">
            <div className="inner">
                <Tabs />
                <div className="forms">
                    <Switch>
                        <Route path={`${path}/advanced`} component={AdditionalInfo} />
                        <Route exact path={`${path}`} component={MainInfo} />
                    </Switch>
                </div>
            </div>
        </section>
    )
}

export default withRouter(Settings)