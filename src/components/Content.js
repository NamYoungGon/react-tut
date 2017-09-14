import React from 'react';

class Content extends React.Component {
    render() {
        return (
            <section>
                <h2>Random Content</h2>
                <p>{this.props.title}</p>
            </section>
        )
    }
}

export default Content;