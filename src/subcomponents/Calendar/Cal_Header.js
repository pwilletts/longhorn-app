import React from 'react'

class Cal_Header extends React.Component{
    render(){
        return(
            <div className="card-header">
                <h4>Viewing visits for: </h4>
                <h4 className="mt-2" style={{color: "red"}}>Hello</h4>
                <button type="submit" className="btn btn-primary mb-10 mr-1 ml-1">Previous Pay Period</button>
                <button type="submit" className="btn btn-primary mb-10 mr-1 ml-1">Current Pay Period</button>
                <button type="submit" className="btn btn-primary mb-10 mr-1 ml-1">Next Pay Period</button>
                 <h4><b>Status: </b>Pending</h4>
            </div>
        );
    }
}

export default Cal_Header;