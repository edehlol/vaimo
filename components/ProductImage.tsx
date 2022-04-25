import Image from 'next/image';
import styled from 'styled-components';
import device from '../breakpoints';

const ImageContainer = styled.div`
  position: relative;

  @media ${device.mobile} {
    width: 360px;
    height: 360px;
  }
  @media ${device.desktop} {
    width: 416px;
    height: 416px;
  }
`;

export default function ProductImage() {
  return (
    <ImageContainer>
      <Image src="/image.jpg" layout="fill" objectFit="contain" alt="product image" />
    </ImageContainer>
  );
}
