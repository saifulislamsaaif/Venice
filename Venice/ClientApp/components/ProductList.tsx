import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class ProductList extends React.Component<RouteComponentProps<{}>, {}> {
 
    public render() {
        return <div>
            <div className="page-header FocusHeader">
                <h1>Product List</h1>
            </div>
            <section className="panel">
                <div>
                    <div className="card card-cascade narrower">
                        <div className="px-4">
                            <div className="table-wrapper">
                                <table className="table table-hover mb-0">
                                    <thead>
                                        <tr>
                                            <th>
                                                <input className="form-check-input" type="checkbox" id="checkbox" />
                                                <label className="form-check-label mr-2 label-table"></label>
                                            </th>
                                            <th className="th-lg">
                                               Show Image
                                            </th>
                                            <th className="th-lg">
                                            Product Name
                                            </th>
                                            <th className="th-lg">
                                               ProductDetail
                                            </th>
                                            <th className="th-lg">
                                              StockQuantiry
                                            </th>
                                          
                                            <th className="th-lg">
                                               Category
                                            </th>
                                            <th className="th-lg">
                                                Display Serial
                                            </th>
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <th scope="row">
                                                <input className="form-check-input" type="checkbox" id="checkbox1" />
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
                                                <input className="form-check-input" type="checkbox" id="checkbox2" />
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
                                                <input className="form-check-input" type="checkbox" id="checkbox3" />
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
                                                <input className="form-check-input" type="checkbox" id="checkbox4" />
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
                                                <input className="form-check-input" type="checkbox" id="checkbox5" />
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

                </div>

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
</section>
        </div>;
    }
}
