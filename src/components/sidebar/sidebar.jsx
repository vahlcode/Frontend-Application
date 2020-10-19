import React, { Component } from 'react'
import { BrowserRouter as Router} from 'react-router-dom'
import './sidebar.css'

//Importing sidebar list and icon components
import {HomeIcon, UserIcon, JobIcon, CogIcon, NewsIcon, ChartIcon} from '../icons/icons'
import AsideItem from './item'

class Sidebar extends Component {
    constructor() {
        super()
        this.state = {
            draw: false
        }
        this.ToggleMobileMenu = this.ToggleMobileMenu.bind(this)
    }

    componentDidMount() {
        this.ToggleMobileMenu()
    }

    ToggleMobileMenu() {
        const ToggleButton = document.querySelector('#toggle-sidebar')
        if (ToggleButton) {
            ToggleButton.addEventListener('click', () => {
                this.setState({ draw: !this.state.draw })
            })
        }
    }

    render() {
        const { draw } = this.state
        return (
            <Router>
                <aside className={`${draw ? 'draw-mobile' : ""}`}>
                    <ul>
                        <AsideItem path='/' icon={HomeIcon} title='Home' />
                        <AsideItem path='/account' icon={UserIcon} title='My Account' />
                        <AsideItem path='/company' icon={JobIcon} title='My Company' />
                        <AsideItem path='/settings' icon={CogIcon} title='My Settings' />
                        <AsideItem path='/news' icon={NewsIcon} title='News' />
                        <AsideItem path='/analytics' icon={ChartIcon} title='Analytics' />
                    </ul>
                </aside>
            </Router>
        )
    }
}

export default Sidebar;