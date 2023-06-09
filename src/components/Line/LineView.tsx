import styled, { keyframes } from 'styled-components';

function LineView() {
  return (
    <LineSvg
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
    </LineSvg>
  );
}

const draw = keyframes`
  from {
    stroke-dashoffset: 2300;
  }
  to {
    stroke-dashoffset: 0;
  }
`;

const LineSvg = styled.svg`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  top: 149px;
  height: max-content;

  & path {
    stroke-dasharray: 2300;
    stroke-dashoffset: 2300;
    animation: ${draw} 2s ease-in-out forwards;
  }

  @media (max-width: 1400px) {
    top: 250px;
  }

  @media (max-width: 850px) {
    display: none;
  }
`;

export default LineView;
