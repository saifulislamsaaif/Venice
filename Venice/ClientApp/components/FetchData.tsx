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
        this.state = { areas: [], loading: true, areaText: '' };

        this.readData();
    };
    //TODO: GET AND POST FUNCTION SOULD BE GENERIC. SAIF WILL DO THAT
    readData = function () {
        fetch('api/AreaAPI/GetPagedAreas?currentPageNumber=1&pageSize=3')
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
            <div className="page-header FocusHeader">
                <h1>DATA LOAD TEST</h1>
            </div>
            <section className="panel">
                <div className="panel-body">

                    <input type="text" id="areaText" value={this.state.areaText} className="form-control" onChange={this.handleChange.bind(this)} />
                    <button onClick={this.onSubmit}>Add Area</button>
                    {contents}

                </div>
            </section>
        </div>;
    }

    private static renderForecastsTable(areas: Area[]) {
        return <div><table className='table'>
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
                        <td>{area.id}</td>
                        <td>{area.areaName}</td>
                        <td>Delete</td>
                    </tr>
                )}
            </tbody>
        </table>
            <div className="center-block">
                <nav aria-label="...">
                    <ul className="pagination">
                        <li className="page-item disabled">
                            <span className="page-link">Previous</span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                        <li className="page-item active">
                            <span className="page-link">
                                2
                                    <span className="sr-only">(current)</span>
                            </span>
                        </li>
                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                        <li className="page-item">
                            <a className="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>;
    }
}

interface Area {
    id: number;
    areaName: string
}
