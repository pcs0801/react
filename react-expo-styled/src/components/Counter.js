import styled from "styled-components/native";
import Button from "../components/Button";
import { useState } from "react";

const StyledText = styled.Text`
    font-size: 74px;
    margin: 10px;
`;

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <StyledText>count: {count}</StyledText>
            <Button title="+" onPress={() => { setCount(count + 1); }} />
            <Button title="-" onPress={() => { setCount(count - 1); }} />
        </>);
}

export default Counter;