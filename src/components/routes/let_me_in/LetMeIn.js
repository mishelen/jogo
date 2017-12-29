import React from 'react';
import { Button } from 'reactstrap';
import authService from './../../../services/auth';

const LetMeIn = () => (
    <div className="text-center letmein">
        <img src="bear-face.svg" alt="" />
        <br />
        <div className="letmein__button-container">
            <Button
                className="letmein__button"
                outline
                color="primary"
                size="lg"
                onClick={() => authService.getToken()}>
                Let me in
            </Button>
        </div>
    </div>
);

export default LetMeIn;
