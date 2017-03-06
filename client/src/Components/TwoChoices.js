import React, { Component } from 'react';

import './TwoChoices.css';

class TwoChoices extends Component {

    render() {
        return (
            <div>
                <h2 className="display-3 text-center">{this.props.heading}</h2>
                <hr className="my-4" />
                <div className="btn-con">  
                    <button className="btn btn-lg btn-outline-primary" onClick={this.props.btn1Click}>
                        {this.props.btn1txt}
                    </button>
                    <button className="btn btn-lg btn-outline-primary" onClick={this.props.btn2Click}>
                        {this.props.btn2txt}
                    </button>
                </div>
            </div>
        )
    }

}

export default TwoChoices;
