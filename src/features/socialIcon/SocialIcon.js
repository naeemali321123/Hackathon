// css
import './SocialIcon.css';
// image
import facebookIcon from '../../assets/image/facebookIcon.png'
import instagramIcon from '../../assets/image/instagramIcon.png'
import whatsappIcon from '../../assets/image/whatsappIcon.png'
import twitterIcon from '../../assets/image/twitterIcon.png'

export default function SocialIcon() {
    return (
        <div id="socialIcon">
            <a href="">
                <div class="fab fa-facebook-f">
                    <img src={facebookIcon} />
                </div>
            </a>
            <a href="">
                <div class="fab fa-instagram">
                    <img src={instagramIcon} />
                </div>
            </a>
            <a href="">
                <div class="fab fa-whatsapp">
                    <img src={whatsappIcon} />
                </div>
            </a>
            <a href="">
                <div class="fab fa-twitter">
                    <img src={twitterIcon} />
                </div>
            </a>
        </div>
    )
}