import { Link } from 'react-router-dom';

const Home = props => {

    return <>
        <Link to={'/dash-board'}>
            <p>dashboard</p>
        </Link>
    </>;
}

export default Home;