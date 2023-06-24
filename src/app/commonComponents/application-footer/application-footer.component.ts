import { Component } from '@angular/core';
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import {
  faChevronUp,
  faGlobe,
  faEnvelopeOpen,
} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-application-footer',
  templateUrl: './application-footer.component.html',
  styleUrls: ['./application-footer.component.scss'],
})
export class ApplicationFooterComponent {
  faTwitter = faTwitter;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faWhatsapp = faWhatsapp;
}
