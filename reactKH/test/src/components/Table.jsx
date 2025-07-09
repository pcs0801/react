import User from './User';

const Table = (props) => {
  return (
    <div className="App">
      <h1>회원 정보 출력</h1>
      <hr />
      <table className="member_tbl">
        <thead>
          <tr>
            <th>이름</th>
            <th>나이</th>
            <th>성별</th>
            <th>전화번호</th>
            <th>액션</th> {

            }
          </tr>
        </thead>
        <tbody>
          {props.userList.map((item, index) => (
            <User
              key={"user" + index}
              item={item}
              index={index}
              onUpdate={props.onUpdate}
              onDelete={props.onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
