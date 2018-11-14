import * as React from 'react';
import { RouteComponentProps } from 'react-router';

export class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return <div>
            <h1>New Theme is coming. We will only add new css. and html tag will be changed accordingly</h1>
            <p>Saif try to create new components for moduler programming.</p>
        </div>;
    }
}
