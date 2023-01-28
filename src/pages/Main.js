import 'bootstrap/dist/css/bootstrap.min.css';
import { CustomNavbar as Navbar } from '../components/Navbar';
export const Main = () => { 
    return (
        <>
            <Navbar />
            <div class="top-bar" style={{
            backgroundColor: "#F4DB7D", 
            paddingLeft: "0px",
            paddingTop:"40px",
        }}>
                <h1>
                    Bulletin Board        
                </h1>
            
            </div>
        </> 
    )
}