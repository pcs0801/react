import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import '../styles/Register.css';
import logo from '../assets/logo.png';
import React from "react";

const Register = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        nickname: "",
        pw: "",
        pwCheck: "",
    });

    const handleRegister = async () => {
        try {
            const { name, email, nickname, pw, pwCheck } = formData;

            if (pw !== pwCheck) {
                alert("비밀번호가 일치하지 않습니다.");
                return;
            }

            await axios.post("http://localhost:8080/members/register", {
                name,
                email,
                nickname,
                password: pw,
            });

            alert("회원가입 성공!");
            navigate("/");
        } catch (err) {
            console.error("회원가입 실패:", err);
            alert("회원가입 실패");
        }
    };

    const handleEmailCheck = async () => {
        try {
            const res = await axios.get(`http://localhost:8080/members/exists/${formData.email}`);
            if (res.data) {
                alert("이미 사용 중인 이메일입니다.");
            } else {
                alert("사용 가능한 이메일입니다.");
            }
        } catch (err) {
            console.error("이메일 중복 확인 실패:", err);
            alert("이메일 확인 중 오류 발생");
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
                <div className="signUp">
                    <div className="signUp_head">
                        <p>회원가입</p>
                    </div>
                    <div className="signup_main_footer">
                        <div className="signUp_main">
                            <p>이름</p>
                            <input type="text" name="name" id="name" placeholder="이름 입력" value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                            <p>이메일</p>
                            <div className="emailPositon">
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="이메일 주소 입력" value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                />
                                <button type="button" id="emailCheckBtn" onClick={handleEmailCheck}>
                                    중복확인
                                </button>
                            </div>
                            <p>닉네임</p>
                            <div className="nickname">
                                <input
                                    type="text"
                                    name="nickname"
                                    id="nickname"
                                    placeholder="닉네임 입력 (국문, 영문, 숫자 혼용가능. 1~10자)" value={formData.nickname}
                                    onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                                />
                            </div>
                            <p>비밀번호</p>
                            <input
                                type="password"
                                name="pw"
                                id="pw"
                                placeholder="비밀번호 입력 (영문, 숫자 8~20자)"
                                value={formData.pw}
                                onChange={(e) => setFormData({ ...formData, pw: e.target.value })}
                            />
                            <p>비밀번호 확인</p>
                            <input
                                type="password"
                                name="pwCheck"
                                id="pwCheck"
                                placeholder="비밀번호 재입력"
                                value={formData.pwCheck}
                                onChange={(e) => setFormData({ ...formData, pwCheck: e.target.value })}
                            />
                        </div>

                        <div className="signUp_footer">
                            <button type="submit" id="signUpBtn" onClick={handleRegister}>
                                가입하기
                            </button>
                            <button type="button" id="signUpCancleBtn" onClick={() => navigate("/")}>
                                가입취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="footer_left">Copyright 2025. pcs All Rights Reserved.</div>
                <div className="footer_center">f_c</div>
                <div className="footer_right">f_r</div>
            </div>
        </div >
    );
};

export default Register;