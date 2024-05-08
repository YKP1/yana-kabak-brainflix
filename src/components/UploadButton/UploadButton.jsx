import { Link } from 'react-router-dom';
import './UploadButton.scss';

const UploadButton = () => {
    return (
        <Link className="header__buttonlink" to="/upload">
            <button className="header__button">UPLOAD</button>
        </Link>
    );
};

export default UploadButton;