import React from 'react';
import "./index.scss";

import Login from '../../Components/Login';
import Dashboard from "../../Components/Dashboard";
import Articles from "../../Components/Articles";

export default function MainRote() {

    const [activePage, setActivePage] = React.useState('dashboard');
    const pageHandler = (clicked) => {
        setActivePage(clicked);
    }

    return (
        <div className='route__mainRoute'>
            <div className='route__mainRoute__menu'>
                <img src='images/logo.png' alt='' />
                <h3 id = 'logged-user'>Nisi prijavljen</h3>
                <br></br>
                <hr></hr>
                <br></br>
                <div className='route__mainRoute__menu__navbar'>
                    <div onClick={() => pageHandler('dashboard')} id='nav-item1' className='route__mainRoute__menu__navbar__navItem'>
                        <img src='images/dashboard.svg' alt='' />
                        <p style={{ color: activePage === 'dashboard' ? '#f79d6e' : 'white' }}>Upravljačka ploča</p>
                    </div>
                    <div onClick={() => pageHandler('articles')} className='route__mainRoute__menu__navbar__navItem'>
                        <img src='images/articles.svg' alt='' />
                        <p style={{ color: activePage === 'articles' ? '#f79d6e' : 'white' }}>Artkli</p>
                    </div>
                </div>
            </div>
            <div className='route__mainRoute__body'>
                <Login />
                <div className='route__mainRoute__body__app'>
                    {
                        (()=>{
                            if(activePage === 'dashboard'){
                                return <Dashboard />
                            }
                            else if(activePage === 'articles'){
                                return <Articles />
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    )
}
