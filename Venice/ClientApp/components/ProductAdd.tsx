import * as React from 'react';
import { RouteComponentProps } from 'react-router';

interface ProductAddState {
    justFileServiceResponse: string;
    formServiceResponse: string;
    fields: {};
    files: any[];
}
export class ProductAdd extends React.Component<RouteComponentProps<{}>, ProductAddState> {
    constructor(props) {
        super(props);

        this.uploadJustFile = this.uploadJustFile.bind(this);
        this.uploadForm = this.uploadForm.bind(this);
        this.filesOnChange = this.filesOnChange.bind(this);
        this.fieldOnChange = this.fieldOnChange.bind(this);

        this.state = {
            justFileServiceResponse: 'Click to upload!',
            formServiceResponse: 'Click to upload the form!',
            fields: {},
            files: []
        }

    }
    
    uploadJustFile(e) {
        e.preventDefault();
        let state = this.state;

        this.setState({
            ...state,
            justFileServiceResponse: 'Please wait'
        });

        if (!state.hasOwnProperty('files')) {
            this.setState({
                ...state,
                justFileServiceResponse: 'First select a file!'
            });
            return;
        }

        let form = new FormData();

        for (var index = 0; index < state.files.length; index++) {
            var element = state.files[index];
            form.append('file', element);
        }
        /*
        axios.post('uploader/justfile', form)
            .then((result) => {
                let message = "Success!"
                if (!result.data.success) {
                    message = result.data.message;
                }
                this.setState({
                    ...state,
                    justFileServiceResponse: message
                });
            })
            .catch((ex) => {
                console.error(ex);
            });
        */
    }

    uploadForm(e) {
        e.preventDefault();
        let state = this.state;

        this.setState({
            ...state,
            formServiceResponse: 'Please wait'
        });

        if (!state.hasOwnProperty('files')) {
            this.setState({
                ...state,
                formServiceResponse: 'First select a file!'
            });
            return;
        }

        let form = new FormData();
        for (var index = 0; index < state.files.length; index++) {
            var element = state.files[index];
            form.append('file', element);
        }

        for (var key in state.fields) {
            if (state.fields.hasOwnProperty(key)) {
                var element = state.fields[key];
                form.append(key, element);
            }
        }
        /*
        axios.post('uploader/upload', form)
            .then((result) => {
                let message = "Success!"
                if (!result.data.success) {
                    message = result.data.message;
                }
                this.setState({
                    ...state,
                    formServiceResponse: message
                });
            })
            .catch((ex) => {
                console.error(ex);
            });
            */
    }

    filesOnChange(sender) {
        let files = sender.target.files;
        let state = this.state;

        this.setState({
            ...state,
            files: files
        });
    }

    fieldOnChange(sender) {
        let fieldName = sender.target.name;
        let value = sender.target.value;
        let state = this.state;

        this.setState({
            ...state,
            fields: { ...state.fields, [fieldName]: value }
        });
    }

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
                                    <form>

                                    <div className="form-group">
                                        <label >Product Photo Upload</label>
                                        <input type="file" id="case-one" onChange={this.filesOnChange} />
                                        <p className="help-block">Example block-level help text here.</p>
                                        <button type="text" onClick={this.uploadJustFile}>Upload just file</button>
                                    </div>

                                    <div className="form-group">
                                        <label>Product Name</label>
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Product Name"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Current Price</label>
                                        <div className="quantity">
                                            <span className="qty-minus" ><i className="fa fa-minus" aria-hidden="true"></i></span>
                                            <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" onChange={this.fieldOnChange} />
                                            <span className="qty-plus" ><i className="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Quantity</label>
                                        <div className="quantity">
                                            <span className="qty-minus" ><i className="fa fa-minus" aria-hidden="true"></i></span>
                                            <input type="number" className="qty-text" id="qty" step="1" min="1" max="12" name="quantity" value="1" onChange={this.fieldOnChange}/>
                                            <span className="qty-plus" ><i className="fa fa-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label>Product Description</label>
                                        <textarea className="form-control" placeholder="Product Description." onChange={this.fieldOnChange}></textarea>
                                    </div>

                                    <div className="form-group">
                                        <label>Additional Information</label>
                                        <textarea className="form-control" placeholder="Additional Information" onChange={this.fieldOnChange}></textarea>
                                    </div>

                                    <input type="file" onChange={this.filesOnChange} />
                                    <p className="available">Available: <span className="text-muted">In Stock</span></p>
                                    <br />
                                    <button type="text" onClick={this.uploadForm}>Upload form </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </div>;
    }
}
