import * as React from 'react';

export class App extends React.Component<IProps, any> {
    render() {
        return <h1>Hello You {this.props.name}</h1>;
    }
}

interface IProps {
    name: string
}