import React from 'react';
import Header from './Header';
import Content from './Content';
import Randomize from './Randomize';
import Contact from './Contact';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            header: 'Header',
            content: 'Content',
            number: 0
        }

        this.onChangeNumber = this.onChangeNumber.bind(this);
    }

    onChangeNumber(number) {
        this.setState({
            number: number
        });
    }

    render(){
        return (
            <div>
                <Header title={this.state.header}/>
                <Content title={this.state.content}/>
                <button onClick={this.handleChange}>Change</button>
                <Randomize onChangeNumber={this.onChangeNumber} number={this.state.number}/>
                <hr/>
                <Contact/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'default Header Title'
};

App.propTypes = {
    headerTitle: React.PropTypes.string
};

export default App;