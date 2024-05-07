import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';

export function SocialMedia() {
    return (
        <ul className="social-media-wrapper">
            <li>
                <FontAwesomeIcon className="sm-item" icon={faXTwitter} />
            </li>
            <li>
                <FontAwesomeIcon className="sm-item" icon={faInstagram} />
            </li>        
            <li>
                <FontAwesomeIcon className="sm-item" icon={faTiktok} />
            </li>
        </ul>
    )
}
