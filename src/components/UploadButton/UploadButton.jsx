import "./UploadButton.scss";
import { useNavigate } from "react-router-dom";

export const UploadButton = () => {
    const navigate = useNavigate ();
    const handleSubmit = () => {
        navigate ("page")
    };
    return <button onClick = {handleSubmit} className="header__button">UPLOAD</button>;
}