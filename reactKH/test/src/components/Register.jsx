import { useState } from 'react';

const Register = (props) => {
  const [input, setInput] = useState({ name: '', age: '', gender: '', phone: '' });

  const changeUser = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const registUser = () => {
    props.onInsert(input);
    setInput({ name: '', age: '', gender: '', phone: '' });
  };

  return (
    <div className="regist-wrap">
      <h3>회원 정보 등록</h3>
      <hr />
      <div className="input_wrap">
        <label>이름</label>
        <input type="text" name="name" value={input.name} onChange={changeUser} />
        <label>나이</label>
        <input type="text" name="age" value={input.age} onChange={changeUser} />
        <label>성별</label>
        <input type="text" name="gender" value={input.gender} onChange={changeUser} />
        <label>전화번호</label>
        <input type="text" name="phone" value={input.phone} onChange={changeUser} />
      </div>
      <button onClick={registUser}>회원등록</button>
     
      
    </div>
  );
};

export default Register;