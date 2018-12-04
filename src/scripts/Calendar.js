import moment from 'moment'

const calendarScripts = {
    setPayPeriod() {
        var a;
        var b;

        if(moment().week() % 2 === 0){
            a = -7
            b= 6
        } else {
            a=0
            b=13
        }    
        return {start: moment().day(a).format("MM/DD/YYYY"), end: moment().day(b).format("MM/DD/YYYY")}
    },
    setEditStatus(payPeriod, status){
        if(status === 'submitted'){
            return 'submitted'
        }
        if(moment().week() % 2 === 0 && moment() < moment(payPeriod.end)){
            return 'Active'
        } else {
            console.log(moment().diff(moment(payPeriod.end).day(-7), 'days'))
            if(moment().diff(moment(payPeriod.end).day(-7), 'days') >1){
                return 'Active'
            } else if (moment().diff(moment(payPeriod.end).day(0), 'days') >0){
                return 'Pending Close'
            } else {
                return 'Active'
            }
        }
    },
    setPrevPayPeriod(payPeriod){
        return {start: moment(payPeriod.start).subtract(14, 'days').format("MM/DD/YYYY"), end: moment(payPeriod.end).subtract(14, 'days').format("MM/DD/YYYY"), status: this.setEditStatus(moment(payPeriod.end).subtract(14, 'days'))}
    }, setNextPayPeriod(payPeriod){
        return {start: moment(payPeriod.start).add(14, 'days').format("MM/DD/YYYY"), end: moment(payPeriod.end).add(14, 'days').format("MM/DD/YYYY"), status: this.setEditStatus(moment(payPeriod.end).add(14, 'days'))}
    }
}




export default calendarScripts