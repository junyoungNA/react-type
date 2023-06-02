import  Layout  from './Layout'
import {Routes, Route} from 'react-router-dom';
import Home from '../pages/Home';

const Router : React.FC = () => {
    return (
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Home/>} />
                </Routes>
            </Layout>
    )
}

export default Router;