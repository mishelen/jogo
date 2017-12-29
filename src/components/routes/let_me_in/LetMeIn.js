import React from 'react';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { userAuth } from './../../../actions/auth';

const LetMeIn = () => (
    <div className="text-center letmein">
        <img src="bear-face.svg" alt="" />
        <br />
        <div className="letmein__button-container">
            <Button className="letmein__button" outline color="primary" size="lg" onClick={userAuth}>
                Let me in
            </Button>
        </div>
    </div>
);

export default connect(null, { userAuth })(LetMeIn);
