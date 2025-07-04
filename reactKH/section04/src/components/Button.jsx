function Button({ text, color = "red", children }) {
    const onClickButton = e => {
        console.log(e);
        alert(`text = ${text}, color = ${color} children = ${children}`);
    }
    return (
        <>
            <button name="teletobi" type="button" style={{ color: color }} onClick={onClickButton}>
                {text} - {text.toUpperCase()}
                {children}
            </button>
        </>
    )
};

export default Button;