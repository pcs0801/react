import { useState } from 'react';

const User = ({ item, index, onUpdate, onDelete }) => {
  const [isEdit, setIsEdit] = useState(false); // 수정 모드 여부
  const [editUser, setEditUser] = useState(item); // 수정할 데이터

  const handleChange = (e) => {
    setEditUser({ ...editUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    onUpdate(index, editUser); // 상위로 업데이트 요청
    setIsEdit(false);
  };

  const handleCancel = () => {
    setEditUser(item); // 원래 값으로 초기화
    setIsEdit(false);
  };

  return (
    <tr>
      {isEdit ? (
        <>
          <td>
            <input
              name="name"
              value={editUser.name}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              name="age"
              value={editUser.age}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              name="gender"
              value={editUser.gender}
              onChange={handleChange}
            />
          </td>
          <td>
            <input
              name="phone"
              value={editUser.phone}
              onChange={handleChange}
            />
          </td>
          <td>
            <button onClick={handleSave}>저장</button>
            <button onClick={handleCancel}>취소</button>
          </td>
        </>
      ) : (
        <>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.gender}</td>
          <td>{item.phone}</td>
          <td>
            <button onClick={() => setIsEdit(true)}>수정</button>
            <button onClick={() => onDelete(index)}>삭제</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default User;
