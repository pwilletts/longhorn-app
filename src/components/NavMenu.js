import React from 'react';
import NavHeader from '../subcomponents/NavMenu/NavHeader'
import NavOption from '../subcomponents/NavMenu/NavOption'
import AccordionItem from '../subcomponents/NavMenu/AccordionItem'
var menuItem = ['Approve','Request', 'Track','MyTime', 'Admin'];

class NavMenu extends React.Component{
    render(){
        return(
            <div className='col-2 border-right sidebar' style={{minHeight:'91vh', minWidth:250}}>
                <div>
                    <NavHeader/>
                </div>
                <div className='accordion' id="accordionExample">
                {menuItem.map(
                    item => {
                        return(
                            <div className="row list-group">
                                <NavOption
                                    type = {item}
                                />            
                                <AccordionItem
                                    type = {item}
                                />
                            </div>                          
                        )
                    }
                )}
                </div>
                </div>
        );
    }
}

export default NavMenu;