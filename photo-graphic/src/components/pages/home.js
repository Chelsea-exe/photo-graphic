import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';

const Home = () => (
    <Fragment>
        <Helmet><title>Designer Home Page!</title></Helmet>
        <div id="homediv">
        <h1>Welcome to the Designer's home page!</h1>
        </div>
    </Fragment>
);

// class Home extends Component {
//     render() {
//         return (
//             <div>
//                 <h2>Home page (/home)</h2>
//             </div>
//         );
//     }
// }

export default Home;