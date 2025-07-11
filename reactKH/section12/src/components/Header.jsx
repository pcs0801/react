import './Header.css';

const Header = ({ title, lChild, rChild }) => {
    return (
        <header className='Header'>
            <div className='Header_left'>{lChild}</div>
            <div className='Header_center'>{title}</div>
            <div className='Header_right'>{rChild}</div>
        </header>
    );
};

export default Header;