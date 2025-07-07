import { useEffect } from "react";

const Even = () => {
    useEffect(() => {
        console.log("Even 마운트");
        return () => {
            console.log("Even 언마운트");
        }
    }, [])

    return (
        <div>
            짝수
        </div>
    )
};

export default Even;