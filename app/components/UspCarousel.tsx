import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faGift } from "@fortawesome/free-solid-svg-icons";

// const uspContent = document.querySelector(".carousel-wrapper")!.cloneNode(true);
// document.querySelector(".carousel-container")!.appendChild(uspContent);

export function UspCarousel() {
  return (
    <>
      <div className="usp-carousel-container">
        <ul className='usp-carousel-wrapper'>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>

        <ul className='usp-carousel-wrapper'>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>

        <ul className='usp-carousel-wrapper'>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>

        <ul className='usp-carousel-wrapper'>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>

        <ul className='usp-carousel-wrapper'>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faTruck} />
            Gratis thuisbezorgd vanaf €50,-
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faRotateLeft} />
            Gratis retourneren binnen 30 dagen
          </li>
          <li className='usp-carousel-item'>
            <FontAwesomeIcon icon={faGift} />
            Gratis cadeauverpakking
          </li>
        </ul>

      </div>
    </>
  )
}