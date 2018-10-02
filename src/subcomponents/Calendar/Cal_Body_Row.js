import React from 'react'
import Cal_Body_Head from './Cal_Body_Head';
import Cal_Body_Row from './Cal_Body_Row';

class Cal_Body extends React.Component{
    render(){
        return(
            <div>
                <table className="table table-bordered">
                    <Cal_Body_Head/>                   
                    <tbody>
                       <Cal_Body_Row/>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Cal_Body;