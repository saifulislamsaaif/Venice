import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
    public render() {
        return <div>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css"/>
            <aside id="SideMenu" className="SideMenu">
                <div className="SideNavigation">
                    <ul className="Side-Accordion" id="Side-Accordion">
                        <li><NavLink to={'/fetchdata'} > <i className="fa fa-dashboard"></i>Sample Call </NavLink></li>
                        
                        <li><NavLink to={'/products'} > Product List</NavLink></li>
                        <li><NavLink to={'/product'} > Product Detail</NavLink></li>
                        <li><NavLink to={'/fetchdata'} > Product Category </NavLink></li>
                        <li className="Sub-Accordion">
                            <a href="javascript:;"><i className="fa fa-tasks"></i><span>User Location Setup</span></a>
                            <ul className="Sub-AccordionList Active">
                                <li><NavLink to={'/'} >City</NavLink></li>
                                <li><NavLink to={'/'} >Region</NavLink></li>
                                <li><NavLink to={'/counter'}  > Area </NavLink></li>
                            </ul>
                        </li>

                        <li className="Sub-Accordion">
                            <a href="javascript:;"><i className="fa fa-building-o"></i><span>Product Setup</span></a>
                            <ul className="Sub-AccordionList">

                                <li><a href="#">Title</a></li>
                            </ul>
                        </li>

                        <li className="Sub-Accordion">
                            <a href="javascript:;"><i className="fa fa-bar-chart-o"></i><span>Report</span></a>
                            <ul className="Sub-AccordionList">

                                <li><a href="#">Monthly Selling Ratio</a></li>
                                <li><a href="#">Visitor Location</a></li>
                                <li><a href="#">Most Visited Items</a></li>
                            </ul>
                        </li>
                        <li className="Sub-Accordion">
                            <a href="javascript:;"><i className="fa fa-gears"></i><span>Administration</span></a>
                            <ul className="Sub-AccordionList">
                                <li><a href="#">Configuration</a></li>
                                <li><a href="#">Permission</a></li>
                                <li><a href="#">User</a></li>
                                <li><a href="#">User Type</a></li>
                                <li><a href="#">Login Log</a></li>
                            </ul>
                        </li>

                    </ul>
                </div>
            </aside>
        </div>

            ;
    }
}
