import React from 'react'


import Title from '../subcomponents/Title'
import Logo from '../subcomponents/Logo'
import NavBarItem from '../subcomponents/NavBarItem';

class MenuBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
                <div className="col-md-4">
                    <Title/>
                </div>

                <div className="collapse navbar-collapse col-md-4 col-md-offset-4 mr-auto" id="navbarSupportedContent">
                    <Logo/>
                </div>
               
                <div className="col-med-3">
                    <ul className="navbar-nav">
                        <NavBarItem
                            type={'badge'}
                        />
                        <NavBarItem
                            type={'text'}
                        />                      
                    </ul>
                </div>
            </nav>
        );
    }
}

export default MenuBar;