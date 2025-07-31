import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/Login.css';
import logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import { FaUser, FaLock } from "react-icons/fa";
import axios from "axios";
import '../styles/Login.css';

const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberEmail, setRememberEmail] = useState(false);

    const handleLogin = async () => {
        try {
            const res = await axios.post("http://localhost:8080/members/login", {
                email,
                password
            });

            localStorage.setItem("nickname", res.data);
            alert("로그인 성공");
            navigate("/");
        } catch (err) {
            console.error(err);
            alert("이메일 또는 비밀번호가 일치하지 않습니다");
        }
    };

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
                <div className="login">
                    <div className="inputEmail">
                        <FaUser />
                        <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="이메일 입력"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="inputPw">
                        <FaLock />
                        <input
                            type="password"
                            name="pw"
                            id="pw"
                            placeholder="비밀번호 입력"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <div className="rememberEmailCheckBox">
                        <label htmlFor="rememberEmail">
                            <input
                                type="checkbox"
                                id="rememberEmail"
                                checked={rememberEmail}
                                onChange={(e) => setRememberEmail(e.target.checked)}
                            />
                            <p>아이디 저장</p>
                        </label>
                    </div>
                    <div className="login_buttons">
                        <button id="loginBtn" onClick={handleLogin}>로그인</button>
                        <button id="signUpBtn" onClick={() => navigate("/register")}>회원가입</button>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer_left">Copyright 2025. pcs All Rights Reserved.</div>
                <div className="footer_center">f_c</div>
                <div className="footer_right">f_r</div>
            </div>
        </div>
    );
};

export default Login;
