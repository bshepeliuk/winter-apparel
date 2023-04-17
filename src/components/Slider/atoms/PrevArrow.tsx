import { CustomArrowProps } from 'react-slick';
import { CSSProperties } from 'styled-components';
import LeftArrowUrl from '../../../assets/left-arrow.png';
import { LeftArrowWrapper } from '../slider.styled';

function PrevArrow(props: CustomArrowProps) {
  const { className, style, onClick } = props;

  return (
    <div className={className} style={getArrowStyles(style!)} onClick={onClick}>
      <LeftArrowWrapper>
        <img src={LeftArrowUrl} />
      </LeftArrowWrapper>
    </div>
  );
}

const getArrowStyles = (style: CSSProperties): CSSProperties => {
  return {
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
  };
};

export default PrevArrow;
