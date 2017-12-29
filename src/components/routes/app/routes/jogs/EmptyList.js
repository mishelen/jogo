import React from 'react';
import { Button } from 'reactstrap';

const EmptyList = () => (
    <div className="jogs__list-empty">
        <p className="text-center">Nothing is there</p>
        <Button outline color="primary" size="lg" className="jogs__add_new--empty">
            Create your jog first
        </Button>
    </div>
);

export default EmptyList;
