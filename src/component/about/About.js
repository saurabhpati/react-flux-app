import React from 'react';

export default class About extends React.Component {
    render() {
        var techs = ['React', 'React DOM', 'React Router', 'Flux'];
        techs = techs.map(tech => <li>{tech}</li>);

        return (
            <div>
                <h2>About</h2>
                <p>This application uses or will use the following tech stack.</p>
                <ul>
                    {techs}
                </ul>
            </div>
        );
    }
}