/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faFacebook, faInstagram, faDribbble, faGithub, faTwitter, faLinkedin, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons'

import { faLocation, faMapLocationDot, faArrowUpRightFromSquare, faBars, faXmark, faCaretRight, faArrowUp,  } from '@fortawesome/free-solid-svg-icons'





/* add icons to the library */
library.add(
    faTwitter,
    faFacebook,
    faInstagram,
    faDribbble, 
    faGithub,
    faTwitter,
    faLocation,
    faMapLocationDot,
    faArrowUpRightFromSquare,
    faBars,
    faXmark,
    faCaretRight,
    faArrowUp,
    faLinkedin,
    faFacebookMessenger

    )

export default FontAwesomeIcon;