function Bulb({ light }) {
    console.log(light);
    return (
        <div>
            {light === 'ON' ?
                (<h1 style={{ backgroundColor: 'orange' }}>ON</h1>) :
                (<h1 style={{ backgroundColor: 'gray' }}>OFF</h1>)
            }
        </div>
    );
};

export default Bulb;