import React, { Component } from 'react';

import './EditList.css';

class EditList extends Component {

    render() {

        const itemList = this.props.items.map((item) => {
            console.log(item);
            return (
                <div key={item.id} className="row">
                    <div className="col-sm-6">
                        <button 
                            onClick={() => this.props.itemClicked(item.id)}
                            className="btn btn-lg btn-block">{item.name}
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button
                            onClick={() => this.props.editBtnClicked(item.id)}
                            className="btn btn-lg btn-block">Edit
                        </button>
                    </div>
                    <div className="col-sm-3">
                        <button
                            onClick={() => this.props.deleteBtnClicked(item.id)}
                            className="btn btn-lg btn-block">Delete
                        </button>
                    </div>
                </div>
            )
        });

        return (
            <div>
                <h2 className="display-3 text-center">{this.props.heading}</h2>
                <div className="list">
                    {itemList}
                </div>
                <button onClick={this.props.newBtnClicked()}>New</button>
            </div>
        )
    }

}

export default EditList;
