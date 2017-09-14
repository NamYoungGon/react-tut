import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>Header</h1>
                <p>{this.props.title}</p>
            </header>
        )
    }
}

export default Header;