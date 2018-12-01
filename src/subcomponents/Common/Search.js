import React from 'react'

class Search extends React.Component{
    render(){
        return(
            <div className="col-12 w-100 mt-3 mr-auto ml-auto border-bottom">
                <input onChange={(e) => this.props.onChange('search', e.target.value)} className='text-center form-control mb-3' type="text" aria-label="Large" placeholder="Begin typing..." aria-describedby="inputGroup-sizing-default"></input>
            </div>
        )
    }
}

export default Search