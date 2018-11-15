import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class Home extends React.Component<RouteComponentProps<{}>, {}> {
 
    public render() {
        return <div>
            <div className="page-header FocusHeader">
                <h1>FUN SAMPLE</h1>
            </div>
            <section className="panel">
            <h1>Admin simple theme has been provided</h1>
                <p>Saif try to create new components for moduler programming.</p>
</section>
        </div>;
    }
}
