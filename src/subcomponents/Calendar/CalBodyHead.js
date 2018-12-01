import React from 'react'
import Responsive from 'react-responsive'
import moment from 'moment'

const Medium = props => <Responsive {...props} maxWidth={1045}/>
const Large = props => <Responsive {...props} minWidth={1046}/>

class CalBodyHead extends React.Component{
    render(){
        return(
            <thead className="thead-light">
                <tr>
                    <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(0).format('ddd')}</th></Medium>
                    <Large><th style={{width:'12%',fontSize:14}}>{moment().day(0).format('dddd')}</th></Large>
                    <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(1).format('ddd')}</th></Medium>
                    <Large><th style={{width:'12%',fontSize:14}}>{moment().day(1).format('dddd')}</th></Large>
                    <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(2).format('ddd')}</th></Medium>
                    <Large><th style={{width:'12%',fontSize:14}}>{moment().day(2).format('dddd')}</th></Large>
                    <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(3).format('ddd')}</th></Medium>
                    <Large><th style={{width:'12%',fontSize:14}}>{moment().day(3).format('dddd')}</th></Large>
                    <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(4).format('ddd')}</th></Medium>
                    <Large><th style={{width:'12%',fontSize:14}}>{moment().day(4).format('dddd')}</th></Large>
                    <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(5).format('ddd')}</th></Medium>
                    <Large><th style={{width:'12%',fontSize:14}}>{moment().day(5).format('dddd')}</th></Large>
                    <Medium><th style={{width:'12%',fontSize:14}}>{moment().day(6).format('ddd')}</th></Medium>
                    <Large><th style={{width:'12%',fontSize:14}}>{moment().day(6).format('dddd')}</th></Large>
                    <Large><th style={{width:'12%',fontSize:14}}>Weekly</th></Large>
                </tr>          
            </thead>
        );
    }
}

export default CalBodyHead;