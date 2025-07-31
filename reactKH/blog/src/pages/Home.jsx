import "../styles/Home.css";
import logo from "../assets/logo.png";
import BoardList from "../components/BoardList";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="wrap">
            <div className="head">
                <div className="head_left">
                    <img src={logo} alt="logo" id="logo" />
                    <p id="blogName">블로그</p>
                </div>
                <div className="head_right">
                    <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li>MENU</li>
                        <li>ABOUT</li>
                        <li><Link to="/login">LOGIN</Link></li>
                        <li><Link to="/register">SIGN UP</Link></li>
                    </ul>
                </div>
            </div>

            <div className="main">
                <BoardList />
            </div>

            <div className="footer">
                <div className="footer_left">Copyright 2025. pcs All Rights Reserved.</div>
                <div className="footer_center">f_c</div>
                <div className="footer_right">f_r</div>
            </div>
        </div>
    );
};

export default Home;
