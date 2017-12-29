import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const TopBar = () => (
    <Navbar className="global-header" color="faded" dark expand="md">
        <NavbarBrand href="/" title="YogoBear">
            <img src="logo.svg" alt="logo" />
        </NavbarBrand>
    </Navbar>
);

export default TopBar;
