import React from 'react'

class Cal_Body_Head extends React.Component{
    render(){
        return(
            <thead className="thead-light">
                <th style={{width:'12%'}}>Sunday</th>
                <th style={{width:'12%'}}>Monday</th>
                <th style={{width:'12%'}}>Tuesday</th>
                <th style={{width:'12%'}}>Wednesday</th>
                <th style={{width:'12%'}}>Thursday</th>
                <th style={{width:'12%'}}>Friday</th>
                <th style={{width:'12%'}}>Saturday</th>
                <th style={{width:'12%'}}>Weekly</th>
            </thead>
        );
    }
}

export default Cal_Body_Head;