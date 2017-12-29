import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { NavLink as Link } from 'react-router-dom';

class TopBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <Navbar className="global-header" color="faded" dark expand="md">
                <NavbarBrand href="/" title="YogoBear">
                    <img src="logo.svg" alt="logo" />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink
                                className="global-header__link"
                                activeClassName="global-header__link--active"
                                tag={Link}
                                to="/jogs">
                                Jogs
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="global-header__link"
                                activeClassName="global-header__link--active"
                                tag={Link}
                                to="/info">
                                Info
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                                className="global-header__link"
                                activeClassName="global-header__link--active"
                                tag={Link}
                                to="/contact_us">
                                Contact Us
                            </NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}

export default TopBar;
