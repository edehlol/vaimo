import Image from 'next/image';
import styled from 'styled-components';
import { useAppSelector } from '../app/hooks';
import device from '../breakpoints';
import { selectProductImage } from '../features/product/productSlice';

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
  const src = useAppSelector(selectProductImage);
  return (
    <ImageContainer>
      <Image src={src} layout="fill" objectFit="contain" alt="product image" />
    </ImageContainer>
  );
}
