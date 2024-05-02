import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";

const truckIcon = <FontAwesomeIcon icon={faTruck} />;
const returnIcon = <FontAwesomeIcon icon={faRotateLeft} />;
const giftIcon = <FontAwesomeIcon icon={faGift} />;

const icons = [truckIcon, returnIcon, giftIcon]
const usps = ['Gratis thuisbezorgd vanaf €50,-', 'Gratis retourneren binnen 30 dagen', 'Gratis cadeauverpakking']

const uspsObj = [ 
  {
      id: 1,
      name: 'Gratis thuisbezorgd vanaf €50,-',
      icon: {truckIcon}
    },
  {
      id: 2,
      name: 'Gratis retourneren binnen 30 dagen',
      icon: {returnIcon}
  },
  {
    id: 3,
    name: 'Gratis cadeauverpakking',
    icon: {giftIcon}
},
]

export function UspCarousel() {
  return(
    <div className="carousel-container">
      <div className='carousel-wrapper'>
        {/* {icons.map((icon) => ( <div className='usp-item' key={icon.toString()}>{icon}</div>))} */}
        {/* {usps.map((usp) => ( <div className='usp-item' key={usp}>{usp}</div>))} */}
        <div className='carousel-item'>
          <FontAwesomeIcon icon={faTruck} />
          <p>Gratis thuisbezorgd vanaf €50,-</p>
        </div>
        <div className='carousel-item'>
          <FontAwesomeIcon icon={faRotateLeft} />
          <p>Gratis retourneren binnen 30 dagen</p>
        </div>
        <div className='carousel-item'>
          <FontAwesomeIcon icon={faGift} />
          <p>Gratis cadeauverpakking</p>
        </div>
      </div>
    </div>
  )
}