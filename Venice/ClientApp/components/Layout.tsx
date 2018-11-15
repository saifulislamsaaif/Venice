import * as React from 'react';
import { NavMenu } from './NavMenu';
import $ from 'jquery'
export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    componentDidMount() {
        function SideMenuManager() {

            var DocumentWidth = $(document).width();

            if (DocumentWidth <= 768) {
                $('#SideMenu').addClass('SideMenu-Hide');

                $('.MainContent').addClass('SideMenu-Merge');

                if ($('.Header').hasClass('SideMenu-Open-Right-Panel')) {
                    $('.Header').removeClass('SideMenu-Open-Right-Panel')
                }
                if ($('#Header').hasClass('SideMenu-Merge-Header')) {
                    $('#Header').removeClass('SideMenu-Merge-Header')
                }
            }

            if (DocumentWidth > 768) {
                $('#SideMenu').removeClass('SideMenu-Hide');

                $('.MainContent').removeClass('SideMenu-Merge');

                if ($('.Header').hasClass('SideMenu-Open-Right-Panel')) {
                    $('.Header').removeClass('SideMenu-Open-Right-Panel')
                }
                if ($('#Header').hasClass('SideMenu-Merge-Header')) {
                    $('#Header').removeClass('SideMenu-Merge-Header')
                }
            }


            return false;
        }

        function SideMenuClickManager() {

            $('#SideMenu').toggleClass('SideMenu-Hide');

            $('.MainContent').toggleClass('SideMenu-Merge');

            if ($('.Header').hasClass('SideMenu-Open-Right-Panel')) {
                $('.Header').removeClass('SideMenu-Open-Right-Panel')
            }
            if ($('#Header').hasClass('SideMenu-Merge-Header')) {
                $('#Header').removeClass('SideMenu-Merge-Header')
            }

            return false;

        }

        $(window).resize(function () {
            SideMenuManager(); // It is decides whether menu will be hidden or not according to window size.
        });

        SideMenuManager(); // It is decides whether menu will be hidden or not according to window size.




        // Updates the panel icon when we open or close it
        $('.panel .fa').click(function () {
            var el = $(this).parents(".panel").children(".panel-body");
            if ($(this).hasClass("fa-chevron-down")) {
                $(this).removeClass("fa-chevron-down").addClass("fa-chevron-up");
                el.slideUp(200);
            } else {
                $(this).removeClass("fa-chevron-up").addClass("fa-chevron-down");
                el.slideDown(200);
            }
        });
        //----------------------------

        // Open or close side menu when we click the menu button
        $('#btnSideMenu').click(function (e) {
            SideMenuClickManager();
        });
        //----------------------------

        // Open or close side menu sub menus when we click to first level of menu items
        $('#Side-Accordion').find('.Sub-Accordion a').click(function () {

            $(".Sub-AccordionList").not($(this).next()).slideUp('fast');
            $(this).next().slideToggle('fast');

        });
    }

    public render() {
        return <div>
            <script src="'./theme/font/FontAwsome.css"></script>
            <section id="container">
                <span id="ToastBox"></span>
                <header className="navbar navbar-default navbar-static-top clearfix Header" id="Header" role="navigation">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <a className="navbar-brand" href="#"><img src={require('../theme/Image/Logo_focus.png')}/></a>
                            </div>
                            <div className="navbar-collapse collapse">

                                <ul className="nav navbar-nav NavMenuSide">
                                    <li><a className="fa fa-bars ButtonCircle" id="btnSideMenu" href="javascript:;"></a></li>
                                </ul>

                                <ul className="nav navbar-nav navbar-right NavMenuRest">
                                    <li className="dropdown NavSubMenuUser">
                                        <a href="javascript:;" className="dropdown-toggle" data-toggle="dropdown"><span className="caret"></span>User Menu</a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#"><i className="fa fa-bell-o"></i> Notifications</a></li>
                                            <li><a href="#"><i className="fa fa-cog"></i> Profile</a></li>
                                            <li><a href="#"><i className="fa fa-key"></i> Logout</a></li>
                                        </ul>
                                    </li>
                                    <li className="dropdown NavSubMenuNotification">
                                        <a href="javascript:;" className="dropdown-toggle fa fa-bell-o ButtonCircle NavSubMenuNotification" data-toggle="dropdown" id="btnNotification"></a>
                                        <ul className="dropdown-menu" role="menu">
                                            <li><a href="#">• Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et lorem lectus. Vestibulum vel felis enim. Nullam egestas justo at nunc semper</a></li>
                                            <li><a href="#">• sit amet tempus purus fermentum. Fusce ultricies, lorem sit amet facilisis adipiscing, lorem libero sagittis metus, ac eleifend nulla</a></li>
                                            <li><a href="#">• Nulla vulputate interdum nulla, tempor suscipit erat eleifend et</a></li>
                                            <li><a href="#">• Nam suscipit, justo non blandit tincidunt, quam mi aliquet nisl, in eleifend eros elit tincidunt ipsum. Etiam accumsan neque ac mauris lacinia</a></li>
                                            <li><a href="#">• Aliquam id ligula euismod, luctus erat id, pellentesque felis. Praesent vestibulum magna massa</a></li>
                                        </ul>
                                    </li>
                                    <li className="NavSubMenuLock"><a className="fa fa-lock ButtonCircle" id="btnLock" href="#"></a></li>
                                </ul>
                            </div>
                        </div>
        </header>
                <NavMenu />

                <section className="container-fluid MainContent">
                    <div className="row">
                        <div className="col-sm-12">
                          
                                    {this.props.children}
                              

                        </div>
                    </div>
                </section>
            </section>
            <div>
                <script src="'./theme/js/Design.js"></script>
                <script src="'./theme/js/complete.js"></script>
            </div>
        </div>;
    }
}
