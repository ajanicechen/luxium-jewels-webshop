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
    icon: { truckIcon }
  },
  {
    id: 2,
    name: 'Gratis retourneren binnen 30 dagen',
    icon: { returnIcon }
  },
  {
    id: 3,
    name: 'Gratis cadeauverpakking',
    icon: { giftIcon }
  },
]

export function UspCarousel() {
  return (
    <div>
      <div className="carousel-container">
        {/* {icons.map((icon) => ( <div className='usp-item' key={icon.toString()}>{icon}</div>))} */}
        {/* {usps.map((usp) => ( <div className='usp-item' key={usp}>{usp}</div>))} */}
        <ul className='carousel-wrapper'>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>
        {/* second node */}
        <ul className='carousel-wrapper'>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>
        {/* third node */}
        <ul className='carousel-wrapper'>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>
      </div>
    </div>
  )
}