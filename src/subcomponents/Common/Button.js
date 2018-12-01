import React from 'react'

class Button extends React.Component{
    setClasses(){
        var classes = 'btn mt-2 mb-10 mr-1 ml-1';
        classes += ` ${this.props.width}`
        classes += ` ${this.props.class}`
        

        return classes
    }

    render(){
        return(
            <button type="submit" className={this.setClasses()} onClick={(e) => this.props.onClick(e, this.props.target)} >{this.props.text}</button>
        );
    }
}

export default Button;