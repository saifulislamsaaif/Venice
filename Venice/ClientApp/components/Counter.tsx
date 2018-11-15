import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface CounterState {
currentCount: number;
}

export class Counter extends React.Component<RouteComponentProps<{}>, CounterState> {
constructor() {
super();
this.state = { currentCount: 0 };
}

public render() {
return <div>
<div className="page-header FocusHeader">
<h1>FUN SAMPLE</h1>
</div>
<section className="panel">
<div className="panel-body">
            
<h1>Counter</h1>

<p>This is a simple example of a React component.</p>

<p>Current count: <strong>{ this.state.currentCount }</strong></p>

<button onClick={() => { this.incrementCounter() }}>Increment</button>

</div>
</section>
</div>;
}

incrementCounter() {
this.setState({
currentCount: this.state.currentCount + 1
});
}
}
