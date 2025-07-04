function BulbButton({ light, onOffButton }) {
    return (
        <div>
            <button onClick={() => { onOffButton() }}>
                {light === 'ON' ? 'OFF' : 'ON'}
            </button>
        </div >
    );
};

export default BulbButton;