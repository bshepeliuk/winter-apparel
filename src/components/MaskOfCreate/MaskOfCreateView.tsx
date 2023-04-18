import { MaskSvg } from './mask.styled';

interface IProps {
  backgroundUrl: string;
}

const WIDTH = 486;
const HEIGHT = 710;

function MaskOfCreateView({ backgroundUrl }: IProps) {
  return (
    <MaskSvg width={WIDTH} height={HEIGHT}>
      <mask id="mask-of-create">
        <g>
          <path
            id="c-letter"
            d="M117.632 117.871C117.632 118.947 118.036 119.957 118.843 120.898C119.65 121.706 120.66 122.11 121.871 122.11H234.503C235.579 122.11 236.521 122.513 237.329 123.321C238.27 124.128 238.741 125.137 238.741 126.348V230.503C238.741 231.579 238.27 232.521 237.329 233.329C236.521 234.27 235.579 234.741 234.503 234.741H9.23883C8.02774 234.741 7.01849 234.27 6.2111 233.329C5.4037 232.521 5 231.579 5 230.503V5.23884C5 4.02774 5.4037 3.01849 6.2111 2.21109C7.01849 1.4037 8.02774 1 9.23883 1H234.503C235.579 1 236.521 1.4037 237.329 2.21109C238.27 3.01849 238.741 4.02774 238.741 5.23884V109.393C238.741 110.47 238.27 111.479 237.329 112.421C236.521 113.228 235.579 113.632 234.503 113.632H121.871C120.66 113.632 119.65 114.036 118.843 114.843C118.036 115.65 117.632 116.66 117.632 117.871Z"
            fill="white"
          />
          <path
            id="r-letter"
            d="M406.921 113.632C405.71 113.632 404.701 114.036 403.894 114.843C403.086 115.65 402.682 116.66 402.682 117.871C402.682 118.947 403.086 119.957 403.894 120.898C404.701 121.706 405.71 122.11 406.921 122.11H476.761C477.838 122.11 478.78 122.513 479.587 123.321C480.529 124.128 481 125.137 481 126.348V230.503C481 231.579 480.529 232.521 479.587 233.329C478.78 234.27 477.838 234.741 476.761 234.741H372.607C371.396 234.741 370.387 234.27 369.579 233.329C368.772 232.521 368.368 231.579 368.368 230.503V121.908C368.368 120.831 367.897 119.889 366.955 119.082C366.148 118.14 365.206 117.669 364.129 117.669C362.918 117.669 361.909 118.14 361.102 119.082C360.294 119.889 359.89 120.831 359.89 121.908V230.503C359.89 231.579 359.419 232.521 358.477 233.329C357.67 234.27 356.728 234.741 355.652 234.741H251.497C250.421 234.741 249.412 234.27 248.47 233.329C247.662 232.521 247.259 231.579 247.259 230.503V5.23884C247.259 4.02774 247.662 3.01849 248.47 2.21109C249.412 1.4037 250.421 1 251.497 1H476.761C477.838 1 478.78 1.4037 479.587 2.21109C480.529 3.01849 481 4.02774 481 5.23884V109.393C481 110.47 480.529 111.479 479.587 112.421C478.78 113.228 477.838 113.632 476.761 113.632H406.921ZM368.368 44.1957C368.368 42.9846 367.897 41.9754 366.955 41.168C366.148 40.3606 365.206 39.9569 364.129 39.9569H359.89V74.0694H364.129C365.206 74.0694 366.148 73.6657 366.955 72.8583C367.897 71.9164 368.368 70.9071 368.368 69.8306V44.1957Z"
            fill="white"
          />

          <path
            id="e-letter"
            d="M234.503 239.182C235.579 239.182 236.521 239.653 237.329 240.595C238.27 241.402 238.741 242.344 238.741 243.421V309.022C238.741 310.099 238.27 311.108 237.329 312.05C236.521 312.857 235.579 313.261 234.503 313.261H121.871C120.66 313.261 119.65 313.665 118.843 314.472C118.036 315.279 117.632 316.289 117.632 317.5C117.632 318.576 118.036 319.585 118.843 320.527C119.65 321.335 120.66 321.738 121.871 321.738H234.503C235.579 321.738 236.521 322.142 237.329 322.95C238.27 323.757 238.741 324.766 238.741 325.977V386.128C238.741 387.205 238.27 388.147 237.329 388.954C236.521 389.896 235.579 390.367 234.503 390.367H121.871C120.66 390.367 119.65 390.771 118.843 391.578C118.036 392.386 117.632 393.395 117.632 394.606C117.632 395.817 118.036 396.826 118.843 397.634C119.65 398.441 120.66 398.845 121.871 398.845H234.503C235.579 398.845 236.521 399.249 237.329 400.056C238.27 400.863 238.741 401.873 238.741 403.084V468.685C238.741 469.761 238.27 470.703 237.329 471.511C236.521 472.453 235.579 472.924 234.503 472.924H9.23883C8.02774 472.924 7.01849 472.453 6.2111 471.511C5.4037 470.703 5 469.761 5 468.685V243.421C5 242.344 5.4037 241.402 6.2111 240.595C7.01849 239.653 8.02774 239.182 9.23883 239.182H234.503Z"
            fill="white"
          />

          <path
            id="a-letter"
            d="M476.761 239.182C477.838 239.182 478.78 239.586 479.587 240.393C480.529 241.201 481 242.21 481 243.421V468.685C481 469.761 480.529 470.703 479.587 471.511C478.78 472.453 477.838 472.924 476.761 472.924H372.607C371.396 472.924 370.387 472.453 369.579 471.511C368.772 470.703 368.368 469.761 368.368 468.685V364.531C368.368 363.319 367.897 362.31 366.955 361.503C366.148 360.695 365.206 360.292 364.129 360.292C362.918 360.292 361.909 360.695 361.102 361.503C360.294 362.31 359.89 363.319 359.89 364.531V468.685C359.89 469.761 359.419 470.703 358.477 471.511C357.67 472.453 356.728 472.924 355.652 472.924H251.497C250.286 472.924 249.277 472.453 248.47 471.511C247.662 470.703 247.259 469.761 247.259 468.685V243.421C247.259 242.21 247.662 241.201 248.47 240.393C249.277 239.586 250.286 239.182 251.497 239.182H476.761ZM368.368 321.94C368.368 320.729 367.897 319.72 366.955 318.913C366.148 318.105 365.206 317.702 364.129 317.702C362.918 317.702 361.909 318.105 361.102 318.913C360.294 319.72 359.89 320.729 359.89 321.94V347.575C359.89 348.652 360.294 349.661 361.102 350.603C361.909 351.41 362.918 351.814 364.129 351.814C365.206 351.814 366.148 351.41 366.955 350.603C367.897 349.661 368.368 348.652 368.368 347.575V321.94Z"
            fill="white"
          />

          <path
            id="t-letter"
            d="M65.5548 554.673C65.5548 553.461 65.0838 552.452 64.1418 551.645C63.3344 550.837 62.3925 550.434 61.3159 550.434H9.23883C8.02774 550.434 7.01849 550.03 6.2111 549.223C5.4037 548.281 5 547.271 5 546.195V481.603C5 480.527 5.4037 479.585 6.2111 478.777C7.01849 477.835 8.02774 477.364 9.23883 477.364H234.503C235.579 477.364 236.521 477.835 237.329 478.777C238.27 479.585 238.741 480.527 238.741 481.603V546.195C238.741 547.271 238.27 548.281 237.329 549.223C236.521 550.03 235.579 550.434 234.503 550.434H182.426C181.214 550.434 180.205 550.837 179.398 551.645C178.59 552.452 178.187 553.461 178.187 554.673V706.867C178.187 707.943 177.716 708.885 176.774 709.693C175.966 710.635 175.024 711.106 173.948 711.106H69.7936C68.5825 711.106 67.5733 710.635 66.7659 709.693C65.9585 708.885 65.5548 707.943 65.5548 706.867V554.673Z"
            fill="white"
          />

          <path
            id="e2-letter"
            d="M476.761 477.364C477.838 477.364 478.78 477.835 479.587 478.777C480.529 479.585 481 480.527 481 481.603V547.204C481 548.281 480.529 549.29 479.587 550.232C478.78 551.039 477.838 551.443 476.761 551.443H364.129C362.918 551.443 361.909 551.847 361.102 552.654C360.294 553.461 359.89 554.471 359.89 555.682C359.89 556.758 360.294 557.768 361.102 558.71C361.909 559.517 362.918 559.921 364.129 559.921H476.761C477.838 559.921 478.78 560.324 479.587 561.132C480.529 561.939 481 562.948 481 564.159V624.311C481 625.387 480.529 626.329 479.587 627.136C478.78 628.078 477.838 628.549 476.761 628.549H364.129C362.918 628.549 361.909 628.953 361.102 629.76C360.294 630.568 359.89 631.577 359.89 632.788C359.89 633.999 360.294 635.009 361.102 635.816C361.909 636.623 362.918 637.027 364.129 637.027H476.761C477.838 637.027 478.78 637.431 479.587 638.238C480.529 639.046 481 640.055 481 641.266V706.867C481 707.943 480.529 708.885 479.587 709.693C478.78 710.635 477.838 711.106 476.761 711.106H251.497C250.286 711.106 249.277 710.635 248.47 709.693C247.662 708.885 247.259 707.943 247.259 706.867V481.603C247.259 480.527 247.662 479.585 248.47 478.777C249.277 477.835 250.286 477.364 251.497 477.364H476.761Z"
            fill="white"
          />
        </g>
      </mask>

      <image
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xlinkHref={backgroundUrl}
        mask="url(#mask-of-create)"
        preserveAspectRatio="xMidYMid slice"
        width={WIDTH}
        height={HEIGHT}
      />
    </MaskSvg>
  );
}

export default MaskOfCreateView;
