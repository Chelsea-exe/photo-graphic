import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Photography = () => (
    <Fragment>
        <Helmet><title>Photography</title></Helmet>
        <div id="photography-div">
            <h1>Welcome to the Photography Portfolio!</h1>
            <p>Click on the following projects to view work</p>
            <div className="row">
                <div className="column" id="photo-thumbnail"></div>
                <div className="column" id="photo-display"></div>
            </div>
        </div>
    </Fragment>
);

export default Photography;