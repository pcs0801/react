function CountButton({ plus1Func, plus10Func, plus100Func, minus1Func, minus10Func, minus100Func }) {
    return (
        <div>
            <button onClick={() => minus1Func()}> -1 </button>
            <button onClick={() => minus10Func()}> -10 </button>
            <button onClick={() => minus100Func()}> -100 </button>
            <button onClick={() => plus100Func()}> +100 </button>
            <button onClick={() => plus10Func()}> +10 </button>
            <button onClick={() => plus1Func()}> +1 </button>
        </div>
    )
}

export default CountButton;