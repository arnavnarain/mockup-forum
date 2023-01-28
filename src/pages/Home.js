import { Link } from 'react-router-dom';
import { MainContainer, Button } from '../components/MainContainer';

export const Home = () => { 
    return (
        <div
        style={{
            position: 'absolute', left: '50%', top: '30%',
            transform: 'translate(-50%, -50%)'
        }}
        >
            <center>
                <MainContainer style={{color: "black"}}>
                    <h1 style={{color: "black"}}>Home</h1>
                    <br />
                    Signup here: <Link to="/signup"> SignUp</Link>
                    <br />
                    Login here: <Link to="/auth"> Login</Link>
                    <br />
                </MainContainer>
            </center>
        </div>
    )
}