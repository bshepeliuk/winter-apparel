import Slider, { CustomArrowProps } from 'react-slick';
import { ChangeEvent, useEffect, useLayoutEffect, useState } from 'react';
import SliderItem1 from './assets/slider-item-1.jpg';
import SliderItem2 from './assets/slider-item-2.jpg';
import SliderItem3 from './assets/slider-item-3.jpg';
import SliderItem4 from './assets/slider-item-4.jpg';
import SliderItem5 from './assets/slider-item-5.jpg';
import LeftArrowUrl from './assets/left-arrow.png';
import RightArrowUrl from './assets/right-arrow.png';
import AndroidIcon from './assets/android.png';
import AppleIcon from './assets/apple.png';
import CreateMaskUrl from './assets/create_mask.svg';
import DefaultCreateImgUrl from './assets/create-background.jpg';

function App() {
  return (
    <>
      <HeaderView />
      <MainView />
    </>
  );
}

function HeaderView() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <a className="logo" href="#">
            LANDING
          </a>

          <nav className="nav">
            <ul className="nav-list">
              <li className="nav-list__item">
                <a href="#">Clothes</a>
              </li>
              <li className="nav-list__item">
                <a href="#">Sneakers</a>
              </li>
              <li className="nav-list__item">
                <a href="#">Bags</a>
              </li>
              <li className="nav-list__item">
                <a href="#">Accessorize</a>
              </li>
            </ul>
          </nav>

          <button className="buy-button" type="button">
            buy
          </button>
        </div>
      </div>
    </header>
  );
}

function MainView() {
  return (
    <main>
      <section className="create">
        <Line />
        <div className="container">
          <div className="create-content">
            <div className="left-block">
              <AvailableApps />
              <h1 className="main-title">
                CHOOSE YOUR WINTER <span>LOOK</span> APPAREL
              </h1>
            </div>
            <div className="right-block">
              <CreateFileInput />
            </div>
          </div>
        </div>
      </section>

      <section className="details">
        <div className="container">
          <div className="details-wrapper">
            <div className="choose-looks">
              <h2 className="title">CHOOSE LOOKS</h2>
              <SimpleSlider />
            </div>
            <div className="about">
              <h2 className="title">MORE ABOUT US</h2>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sed
                enim sed libero commodo efficitur. Suspendisse et lorem ac neque
                dictum pellentesque nec sit amet nisl. Fusce rutrum quis purus
                ut pretium. Vivamus ornare mauris non ligula egestas, accumsan
                faucibus quam sollicitudin. Duis efficitur lorem tellus. Aliquam
                non rhoncus felis, porttitor consequat quam. Morbi gravida
                semper mattis. Nunc ultrices justo in pulvinar convallis.
                Curabitur dapibus ut tellus eu condimentum. Morbi vitae
                convallis purus, ac finibus ipsum.
              </p>
              <p className="description">
                Suspendisse nec pharetra turpis. Aenean id nunc id orci aliquam
                pulvinar eget vitae nisl. In ligula neque, vestibulum vel arcu
                eu, eleifend vestibulum tortor. Duis facilisis, est et aliquam
                dapibus, urna mauris sagittis mi, et mattis metus magna vel
                tellus. Phasellus sit amet volutpat ante, ut condimentum lorem.
                Quisque auctor sollicitudin dui, vitae egestas nunc suscipit et.
                Nullam eu quam sem. Donec a nibh molestie, aliquam libero
                maximus, feugiat velit. Curabitur ac accumsan velit. In hac
                habitasse platea dictumst.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function AvailableApps() {
  return (
    <div>
      <div className="applications-wrapper">
        <button className="application-btn apple-btn" type="button">
          <img src={AppleIcon} />
        </button>
        <button className="application-btn android-btn" type="button">
          <img src={AndroidIcon} />
        </button>
      </div>
      <p>App available</p>
    </div>
  );
}

function Line() {
  return (
    <svg
      className="line"
      width="1512"
      height="349"
      viewBox="0 0 1512 349"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 182.966C10.0018 182.966 29.0603 198.142 29.0603 198.142C44.3811 204.762 68.2917 215.094 68.2917 215.094C68.2917 215.094 99.1942 227.298 119.793 232.369C141.846 237.798 177.268 241.248 177.268 241.248C250.651 247.066 322.343 261.713 363.254 210.574C370.413 201.625 373.166 185.872 357.442 185.872C341.586 185.872 334.421 189.718 321.116 196.043C298.303 206.889 276.942 223.371 273.328 239.634C268.413 261.753 263.913 302.171 278.979 321.003C301.659 349.353 392.314 345.543 392.314 345.543C392.314 345.543 484.302 343.21 541.813 331.82C566.519 326.927 604.454 316.482 604.454 316.482L682.917 286.938L779.072 247.5C779.072 247.5 809.513 231.592 829.072 221.5C858.096 206.524 903.572 183.5 903.572 183.5C903.572 183.5 941.041 166.71 965.072 156C995.587 142.399 1043.27 121.294 1043.27 121.294C1043.27 121.294 1087.84 105.191 1110.1 97.2384C1127.23 91.122 1145.64 88.0635 1162.41 80.6095C1182.66 71.6103 1226.18 62.5275 1226.18 62.5275C1226.18 62.5275 1268.58 49.7304 1296.09 42.8311C1346.56 30.1743 1474.95 17.0417 1517.07 3"
        stroke="#647CE9"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
}

const createLabelStyles = (backgroundUrl = DefaultCreateImgUrl) => ({
  backgroundImage: `url(${backgroundUrl})`,
  width: 686,
  height: 710,
  WebkitMaskImage: `url(${CreateMaskUrl})`,
  WebkitMaskRepeat: 'no-repeat',
  WebkitMaskPosition: 'center',
});

const useWindowResize = () => {
  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth, window.innerHeight]);
    }

    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};

function CreateFileInput() {
  const [styles, setStyles] = useState(createLabelStyles());
  const [width] = useWindowResize();

  useEffect(() => {
    if (width <= 1050) {
      setStyles((prev) => ({ ...prev, width: 486, height: 600 }));
    }

    if (width <= 830) {
      setStyles((prev) => ({ ...prev, width: 350, height: 550 }));
    }
  }, [width]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    const files = evt.target.files;

    if (files === null) return;

    const fileUrl = URL.createObjectURL(files[0]);

    setStyles(createLabelStyles(fileUrl));
  };

  return (
    <div>
      <input
        className="create-input"
        type="file"
        name="create"
        id="create"
        onChange={handleChange}
      />
      <label htmlFor="create">
        <div style={styles}></div>
      </label>
    </div>
  );
}

function SampleNextArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  // TODO: refactoring;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: 'flex',
        height: 76,
        width: 76,
        zIndex: 1,
        borderRadius: '50%',
        backgroundColor: '#fff',
        color: '#888888',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
      onClick={onClick}
    >
      <div className="right-arrow">
        <img src={RightArrowUrl} />
      </div>
    </div>
  );
}

function SamplePrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;
  // TODO: refactoring;
  return (
    <div
      className={className}
      style={{
        ...style,
        height: 76,
        width: 76,
        display: 'flex',
        zIndex: 1,
        borderRadius: '50%',
        backgroundColor: '#fff',
        color: '#888888',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
      onClick={onClick}
    >
      <div className="left-arrow">
        <img src={LeftArrowUrl} />
      </div>
    </div>
  );
}

const settings = {
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  slidesPerRow: 1,
  row: 1,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  adaptiveHeight: true,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1300,
      settings: {
        arrows: false,
      },
    },
    {
      breakpoint: 460,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};
// TODO: rename;
const images = [
  SliderItem1,
  SliderItem2,
  SliderItem3,
  SliderItem4,
  SliderItem5,
  SliderItem1,
  SliderItem2,
  SliderItem3,
  SliderItem4,
  SliderItem5,
  SliderItem1,
  SliderItem2,
  SliderItem3,
  SliderItem4,
  SliderItem5,
  SliderItem1,
  SliderItem2,
  SliderItem3,
  SliderItem4,
  SliderItem5,
];

const styles = {
  width: 242,
};

function SimpleSlider() {
  // TODO: state for images;
  return (
    <div>
      <Slider {...settings}>
        {images.map((url, idx) => (
          <div key={idx} style={styles} className="test">
            <img src={url} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default App;
