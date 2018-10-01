import React from 'react'
import Title from '../subcomponents/MenuBar/Title'
import Logo from '../subcomponents/MenuBar/Logo'
import NavBarItem from '../subcomponents/MenuBar/NavBarItem';

class MenuBar extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-bottom">
                <div className="col-md-4">
                    <Title/>
                </div>

                <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
                    <Logo/>
                </div>
               
                <div className="col-med-4 ml-auto">
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