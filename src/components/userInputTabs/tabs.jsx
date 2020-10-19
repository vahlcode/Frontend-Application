import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import './tabs.css'

function Tabs() {
    return (
        <Router>
            <div className="tabs">
                <ul>
                    <li>
                        <NavLink to='/settings' activeClassName='active' exact>Main Information</NavLink>
                    </li>
                    <li>
                        <NavLink to='/settings/advanced' activeClassName='active' exact>Additional Information</NavLink>
                    </li>
                </ul>
            </div>
        </Router>
    )
}

export default Tabs