import React from 'react'
import Cal_Header from '../subcomponents/Calendar/Cal_Header'
import Cal_Body from '../subcomponents/Calendar/Cal_Body';

class Calendar extends React.Component{
    render(){
        return(
            <div className="col-12 card text-center" style={{padding:0}}>
                <div>
                    <Cal_Header/>
                </div>
                <div>
                    <Cal_Body/>
                </div>
            </div>
        );
    }
}

export default Calendar;