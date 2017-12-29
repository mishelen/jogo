import React from 'react';
import PropTypes from 'prop-types';
import EmptyList from './EmptyList';
import AddNewJog from './AddNewJog';

const JogsList = ({ jogs }) =>
    jogs.length ? (
        <div className="jogs__list">
            <ul className="list-unstyled">{jogs.map(({ id }) => <li key={id}>jog</li>)}</ul>
            <AddNewJog />
        </div>
    ) : (
        <EmptyList />
    );

JogsList.propTypes = {
    jogs: PropTypes.arrayOf()
};
JogsList.defaultProps = {
    jogs: []
};

export default JogsList;
