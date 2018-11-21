import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import 'isomorphic-fetch';

interface FetchDataAreaState {
    areas: Area[];
    loading: boolean;
    areaText: string;
    currentPage: number;
    itemPerPage: number;
    pageCount: number;
}

export class FetchData extends React.Component<RouteComponentProps<{}>, FetchDataAreaState> {
    constructor() {
        super();
        this.state = { areas: [], loading: true, areaText: '', currentPage: 1, itemPerPage: 10, pageCount: 2};
        this.handleClick = this.handleClick.bind(this);
        this.readData();
    };

  

    //TODO: GET AND POST FUNCTION SOULD BE GENERIC. SAIF WILL DO THAT
    readData = function () {
        if (this.state.currentPage < 1 || this.state.currentPage > this.state.pageCount)
            return;

        fetch('api/AreaAPI/GetPagedAreas?currentPageNumber=' + this.state.currentPage +'&pageSize=3')
            .then(response => response.json())
            .then(data => {
                this.setState({ areas: data.data, loading: false, pageCount: data.pageCount});
            });
    }

    handleChange = (e) => {
        this.setState({
            areaText: e.target.value
        })
    };

    handleClick(event) {
        console.log(event.target.id);
        this.setState({
            currentPage: Number(event.target.id)
        }, () => this.readData());
        
    }

    handlePrevious = (e) => {
        this.setState({
            currentPage: this.state.currentPage - 1
        }, () => this.readData());
   
    }
    handleNext = (e) => {
        this.setState({
            currentPage: this.state.currentPage + 1
        }, () => this.readData());
       
    }

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

        
        const pageNumbers = [];

        for (let i = 1; i <= this.state.pageCount; i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className={this.state.currentPage == number ? 'page-item active' : 'page-item'}>
                    <a key={"pgNumber-" + number} id={number} onClick={this.handleClick} href="javascript:void(0)">{number}</a>
                </li>
            );
        });

        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderForecastsTable(this.state.areas);

        return <div>
            <div className="page-header FocusHeader">
                <h1>All Areas</h1>
            </div>
            <section className="panel">
                <div className="panel-body">

                    <input type="text" id="areaText" value={this.state.areaText} className="form-control" onChange={this.handleChange.bind(this)} />
                    <button onClick={this.onSubmit}>Add Area</button>
                    {contents}
                    <div className="center-block">
                        <nav aria-label="...">
                            <ul id="page-numbers" className="pagination">
                                <li className={this.state.currentPage == 1 ? 'page-item disabled' : 'page-item'}>
                                    <a className="page-link" href="javascript:void(0)" onClick={this.handlePrevious}>Previous</a>
                                </li>
                                {renderPageNumbers}
                                <li className={this.state.currentPage == this.state.pageCount ? 'page-item disabled' : 'page-item'}>
                                    <a className="page-link" href="javascript:void(0)" onClick={this.handleNext}>Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </section>
        </div>;
    }

    private static renderForecastsTable(areas: Area[]) {
        return <div><table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Area Name</th>
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

        </div>;
    }
}

interface Area {
    id: number;
    areaName: string
}
