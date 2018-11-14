import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchDataAreaState {
    areas: Area[];
    loading: boolean;
    areaText: string;
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataAreaState> {
    constructor() {
        super();
        this.state = { areas: [], loading: true, areaText: ''};

        this.readData();
    };
    //TODO: GET AND POST FUNCTION SOULD BE GENERIC. SAIF WILL DO THAT
    readData = function () {
        fetch('api/AreaAPI/GetAllAreas')
            .then(response => response.json() as Promise<Area[]>)
            .then(data => {
                this.setState({ areas: data, loading: false });
            });
    }

    handleChange = (e) => {
        this.setState({
            areaText: e.target.value
        })
    };

    onSubmit = (e) => {
        e.preventDefault();
        const form = {
            areaName: this.state.areaText,
            id: 0
        }
            fetch('api/AreaAPI/Add',
                {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(form)
                }).then(data => {
                    if (data.statusText == "OK") {
                        this.readData();
                    }
                });

        this.setState({
            areaText: ''
        });
    };

   

    public render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.areas);

        return <div>
            <h1>Dhakar Area Shomuho</h1>
            <input type="text" id="areaText" value={this.state.areaText} className="form-control" onChange={this.handleChange.bind(this)}/>
            <button onClick={this.onSubmit}>Add Area</button>
            { contents }
        </div>;
    }

    private static renderForecastsTable(areas: Area[]) {
        return <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nasty Places</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {areas.map(area =>
                    <tr key={area.id}>
                        <td>{area.id }</td>
                        <td>{area.areaName}</td>
                        <td>Delete</td>
                </tr>
            )}
            </tbody>
        </table>;
    }
}

interface Area{
    id: number;
    areaName: string
}
