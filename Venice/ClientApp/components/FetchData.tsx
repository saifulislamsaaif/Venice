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
            <div className="page-header FocusHeader">
                <h1>DATA LOAD TEST</h1>
            </div>
            <section className="panel">
                <div className="panel-body">
               
            <input type="text" id="areaText" value={this.state.areaText} className="form-control" onChange={this.handleChange.bind(this)}/>
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
                        <td>{area.id }</td>
                        <td>{area.areaName}</td>
                        <td>Delete</td>
                </tr>
            )}
            </tbody>
        </table>

             
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


            <div className="card card-cascade narrower">

                <div className="view view-cascade gradient-card-header blue-gradient narrower py-2 mx-4 mb-3 d-flex justify-content-between align-items-center">

                    <div>
                        <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                            <i className="fa fa-th-large mt-0"></i>
                        </button>
                        <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                            <i className="fa fa-columns mt-0"></i>
                        </button>
                    </div>

                    <a href="" className="white-text mx-3">Table name</a>

                    <div>
                        <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                            <i className="fa fa-pencil mt-0"></i>
                        </button>
                        <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                            <i className="fa fa-remove mt-0"></i>
                        </button>
                        <button type="button" className="btn btn-outline-white btn-rounded btn-sm px-2">
                            <i className="fa fa-info-circle mt-0"></i>
                        </button>
                    </div>

                </div>


                <div className="px-4">

                    <div className="table-wrapper">
                    
      <table className="table table-hover mb-0">

                        
        <thead>
                                <tr>
                                    <th>
                                        <input className="form-check-input" type="checkbox" id="checkbox"/>
                                        <label className="form-check-label mr-2 label-table"></label>
                                     </th>
                                        <th className="th-lg">
                                            <a>First Name
                <i className="fa fa-sort ml-1"></i>
                                            </a>
                                        </th>
                                        <th className="th-lg">
                                            <a href="">Last Name
                <i className="fa fa-sort ml-1"></i>
                                            </a>
                                        </th>
                                        <th className="th-lg">
                                            <a href="">Username
                <i className="fa fa-sort ml-1"></i>
                                            </a>
                                        </th>
                                        <th className="th-lg">
                                            <a href="">Username
                <i className="fa fa-sort ml-1"></i>
                                            </a>
                                        </th>
                                        <th className="th-lg">
                                            <a href="">Username
                <i className="fa fa-sort ml-1"></i>
                                            </a>
                                        </th>
                                        <th className="th-lg">
                                            <a href="">Username
                <i className="fa fa-sort ml-1"></i>
                                            </a>
                                        </th>
          </tr>
        </thead>

                                <tbody>
                                    <tr>
                                        <th scope="row">
                                            <input className="form-check-input" type="checkbox" id="checkbox1"/>
                                                <label className="form-check-label"></label>
            </th>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mdo</td>
                                            <td>Mark</td>
                                            <td>Otto</td>
                                            <td>mdo</td>
          </tr>
                                        <tr>
                                            <th scope="row">
                                                <input className="form-check-input" type="checkbox" id="checkbox2"/>
                                        <label className="form-check-label label-table" ></label>
            </th>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>fat</td>
                                                <td>Jacob</td>
                                                <td>Thornton</td>
                                                <td>fat</td>
          </tr>
                                            <tr>
                                                <th scope="row">
                                                    <input className="form-check-input" type="checkbox" id="checkbox3"/>
                                        <label className="form-check-label label-table" ></label>
            </th>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>twitter</td>
                                                    <td>Larry</td>
                                                    <td>the Bird</td>
                                                    <td>twitter</td>
          </tr>
                                                <tr>
                                                    <th scope="row">
                                                        <input className="form-check-input" type="checkbox" id="checkbox4"/>
                                        <label className="form-check-label label-table"  ></label>
            </th>
                                                        <td>Paul</td>
                                                        <td>Topolski</td>
                                                        <td>P_Topolski</td>
                                                        <td>Paul</td>
                                                        <td>Topolski</td>
                                                        <td>P_Topolski</td>
          </tr>
                                                    <tr>
                                                        <th scope="row">
                                                            <input className="form-check-input" type="checkbox" id="checkbox5"/>
                                        <label className="form-check-label label-table" ></label>
            </th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>
                                                            <td>twitter</td>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>
                                                            <td>twitter</td>
          </tr>
        </tbody>

      </table>

    </div>

  </div>

</div>

            </div>;
    }
}

interface Area{
    id: number;
    areaName: string
}
