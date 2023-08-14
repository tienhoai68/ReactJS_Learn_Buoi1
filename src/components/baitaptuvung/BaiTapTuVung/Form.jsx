import React, { Component } from 'react'

export default class Form extends Component {
    // DOM react
    enInputRef = React.createRef();
    viInPutRef = React.createRef();

    handleSave = () => {
        const en = this.enInputRef.current.value;
        const vi = this.viInPutRef.current.value;

        const data = {
            id: Date.now(),
            en: en,
            vi: vi,
            isFavorited: false,
        }
        // console.log(data);
        this.props.handleSaveData(data);
    };
    render() {
        return (
            <section>
                <div className="form-group">
                    <input ref={this.enInputRef} placeholder="En" type="text" className="form-control" />
                </div>
                <div className="form-group">
                    <input ref={this.viInPutRef} placeholder="Vi" type="text" className="form-control" />
                </div>
                <button onClick={() => this.handleSave()} className="btn btn-primary w-100">SAVE</button>
                <hr />
            </section>
        )
    }
}
