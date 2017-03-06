import React, { Component } from 'react';

import './EditList.css';

class EditList extends Component {

    render() {

        const itemList = this.props.items.map((item) => {
            <button onClick={() => this._handleClick(item.id)} className="btn btn-lg btn-block">item.name</button>
        });

        return (
            <div>
                <h2 className="display-3 text-center">{this.props.heading}</h2>
                <hr className="my-4" />
                <div className="list">
                    {itemList}
                </div>
            </div>
        )
    }

}

export default EditList;
