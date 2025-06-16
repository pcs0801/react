import { styled } from "styled-components/native";
import Counter from "./components/Counter";
import { useState } from "react";
import Button from "./components/Button";
import { View } from "react-native";

const Container = styled.View`
    flex:1;
    background-color: "blue";
    align-items: start;
    justify-content: center;
`;

const StyledText = styled.Text`
    font-size: 24px;
    font-weight: 700;
    color: red;
`;

const App = () => {
    const [isV, setV] = useState(true);
    return (
        <Container>
            <View style={{alignItems: "center"}}>
                <StyledText>
                    버튼 카운터
                </StyledText>
            </View>
            <View style={{ width: "25%" }}>
                <Button title={isV ? "Hide" : "Show"} onPress={() => { setV(abcd => !abcd) }} />
            </View>

            {isV && <Counter />}
        </Container>

    );
};

export default App;