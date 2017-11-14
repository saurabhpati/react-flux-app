import React from 'react';

export default class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>This application uses or will use the following tech stack.</p>
                <ul>
                    <li>React</li>
                    <li>React DOM</li>
                    <li>React Router</li>
                    <li>Flux</li>
                </ul>
            </div>
        );
    }
}