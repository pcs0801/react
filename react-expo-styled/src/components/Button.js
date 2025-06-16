import { StyleSheet, TouchableOpacity, Text } from "react-native"

const Button = ({title, onPress}) => {
    return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
    );
}

const styles = StyleSheet.create(
    {
        button: {
            backgroundColor: "#3498db",
            borderRadius: 15,
            padding: 15,
            margin: 10,
            justifyContent: "center",
        },
        text: {
            fontSize: 24,
            fontWeight: 600,
            color: "#fff",
        },
    }
)

export default Button;