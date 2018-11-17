import * as React from 'react';
import { RouteComponentProps } from 'react-router';


export class ProductAdd extends React.Component<RouteComponentProps<{}>, {}> {

    public render() {
        return <div>
            <div className="page-header FocusHeader">
                <h1>FUN SAMPLE</h1>
            </div>
            <section className="panel">
                <section className="single_product_details_area section_padding_0_100">
                    <div className="container">
                        <div className="row">

                            <div className="col-12 col-md-5">
                                <div className="single_product_thumb">
                                    <div id="product_details_slider" className="carousel slide" data-ride="carousel">

                                        <img src={require('../theme/Image/sample1.jpg')} style={{ width: '400px' }} />

                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img className="d-block w-100" src={require('../theme/Image/sample1.jpg')} />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../theme/Image/sample2.jpg')} />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../theme/Image/sample3.jpg')} />
                                            </div>
                                            <div className="carousel-item">
                                                <img className="d-block w-100" src={require('../theme/Image/sample3.jpg')} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-7">
                                <div className="single_product_desc">

                                  

                                    <div className="form-group">
                                        <label >Product Photo Upload</label>
                                        <input type="file" id="exampleInputFile"/>
                                            <p className="help-block">Example block-level help text here.</p>
                                    </div>

                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Product Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Current Price</label>
                                        <div className="quantity">
                                            <span className="qty-minus" ><i className="fa fa-minus" aria-hidden="true"></i></span>
                                            <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" />
                                            <span className="qty-plus" ><i className="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <div className="quantity">
                                            <span className="qty-minus" ><i className="fa fa-minus" aria-hidden="true"></i></span>
                                            <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" />
                                            <span className="qty-plus" ><i className="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Product Description</label>
                                        <textarea className="form-control" placeholder="Product Description."></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>Additional Information</label>
                                        <textarea className="form-control" placeholder="Additional Information"></textarea>
                                    </div>


                                  
                                    <p className="available">Available: <span className="text-muted">In Stock</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>;
    }
}
