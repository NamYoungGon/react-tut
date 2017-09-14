import React from 'react';

class Randomize extends React.Component {
    constructor(props) {
        super(props);

        this.onRandomNumber = this.onRandomNumber.bind(this);
    }

    onRandomNumber() {
        var number = parseInt(Math.random() * 10);
        this.props.onChangeNumber(number);
    }

    
    render() {
        return (
            <div>
                <h5>{this.props.number}</h5>
                <button onClick={this.onRandomNumber}>Randomize</button>
            </div>
        )
    }
}

export default Randomize;