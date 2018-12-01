import React from 'react';
import Modal from 'react-modal'
import ModalHeader from '../Modals/ModalHeader';
import ModalBody from '../Modals/ModalBody';
import $ from 'jquery'

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width:  400,
      minWidth: 350,
      maxWidth:500
    }
  };

class VisitsModal extends React.Component{
    state = {
        day: null,
        visits: null
    }

    initVisits(){
        var arr = [];
        var b = this.props.day.visits

        b.forEach(function(value){
            var obj = {};
            obj["payCode"] = value.payCode;
            obj["payCodeName"] = value.payCodeName;
            obj["total"] = value.total;
            arr.push(obj)
        })

        return arr;
    }

    checkVisits(){
        if(!this.state.visits){
            return  this.initVisits();
        } else {
            return  this.state.visits
        }
    }

    addVisits(visit){      
        var visits = this.checkVisits()
        var c = visits.find(a=>a.payCode === visit.payCode)
        c.total = Number(c.total) + 1;
        this.setState({visits: visits})
    }

    subtractVisits(visit){
        var visits = this.checkVisits()
        var c = visits.find(a=>a.payCode === visit.payCode)
        if(c.total === 0){
            c.total = 0;
        } else {
            c.total = Number(c.total) - 1;
        }
        
        this.setState({visits: visits})
    }

    setVisits(){
        if(!this.state.visits){
            return this.props.day.visits
        } else {
            return this.state.visits
        }
    }

    addVisitType(){
        var payCodeName = $('#selectedVisitType option:selected').text();
        var payCode = $('#selectedVisitType').val();

        if(!payCodeName || payCodeName === ''){
            alert('Please select a new visit type to add');
            return
        }

        var visits = this.checkVisits();
        if(!visits.find(a=> a.name === payCodeName)){
            var fullVisitInfo = this.props.payCodes.find(b => b.PAYCODE === payCode);
            visits.push({payCode: fullVisitInfo.PAYCODE, payCodeName: fullVisitInfo.PAYCODENAME, total: 1})
            this.setState({visits: visits}, function(){
                $('#selectedVisitType').val('')
            })
        }
    }

    render(){
        return(
            <Modal
                isOpen={this.props.isOpen}
                onRequestClose={() => this.closeModal}
                style={customStyles}
                shouldCloseOnOverlayClick={false}
            >
                <ModalHeader
                    stateChange={this.props.stateChange}
                    day={this.props.day}
                />
                <ModalBody
                    day={this.props.day}
                    payCodes={this.props.payCodes}
                    visits={this.setVisits()}
                    addVisitType={this.addVisitType.bind(this)}
                    saveVisits={this.props.saveVisits}
                    addVisits={this.addVisits.bind(this)}
                    subtractVisits={this.subtractVisits.bind(this)}
                />
            </Modal>
        );
    }
}

export default VisitsModal;