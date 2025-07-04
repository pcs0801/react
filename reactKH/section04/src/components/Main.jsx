import "./Main.css"
import Button from "./Button"

export default function Main() {
    const buttonProps = {
        text: "mail",
        color: "red"
    };

    return (
        <>
            <Button {...buttonProps}></Button>
            <Button text={"주문"} color={"green"}></Button>
            <Button text={"카페"}>
                <h2>자식</h2>
            </Button>
        </>
    )
}