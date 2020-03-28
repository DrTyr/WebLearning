import React from 'react';
import { Link } from 'react-router-dom';
import './Page1.css';

export default class Page1 extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                TEST
                <Link to={`/`}>HOMEPAGE</Link>
            </div>
        );
    }
}
