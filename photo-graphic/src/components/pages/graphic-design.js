// const { Fragment } = require("react")
import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Graphics = () => (
    <Fragment>
        <Helmet><title>Graphic Design</title></Helmet>
        <div id="graphics-div">
            <h1>Welcome to Graphic Design's page!!</h1>
            <p>Click on the following work to view work</p>
        </div>
    </Fragment>
);

export default Graphics;