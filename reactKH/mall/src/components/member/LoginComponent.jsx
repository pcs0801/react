import { useState } from "react"
import useCustomLogin from "../../hooks/useCustomLogin"

const initState = {
    email: '',
    pw: ''
}
const LoginComponent = () => {
    const [loginParam, setLoginParam] = useState({ ...initState })
    const { doLogin, moveToPath } = useCustomLogin()
    const handleChange = (e) => {
        loginParam[e.target.name] = e.target.value
        setLoginParam({ ...loginParam })
    }
    const handleClickLogin = (e) => {
        doLogin(loginParam)
            .then(data => {
                console.log(data)
                if (data.error) {
                    alert("이메일과 패스워드를 다시 확인하세요")
                } else {
                    alert("로그인 성공")
                    moveToPath('/')
                }
            })
    }
    return (
        <>
            <h2 className="text-center mb-3">Login Component</h2>
            <FloatingLabel controlId="floatingInput" label="Email address" className="mb-3"
            >
                <Form.Control name="email" type="email"
                    placeholder="name@example.com" value={loginParam.email} onChange={handleChange}
                />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control name="pw" type="password" placeholder="Password" value={loginParam.pw}
                    onChange={handleChange}
                />
            </FloatingLabel>
            <div className="d-grid gap-2 mt-3">
                <Button variant="outline-primary" onClick={handleClickLogin}>
                    로그인
                </Button>
            </div>
        </>
    );
}

export default LoginComponent;