import Image from 'next/image';
import styled from 'styled-components';
import device from '../breakpoints';

const Container = styled.div`
  background-color: #fff0e6;
  color: #ff6600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 16px;
`;

const DesktopText = styled.div`
  display: none;
  @media ${device.desktop} {
    display: block;
  }
`;

export default function MarchExpo() {
  return (
    <Container>
      <Image src="/expo.png" width="76px" height="40px" alt="march expo" />
      <div>• Free shipping (up to $40)</div>
      <DesktopText>• On-time delivery guaranteed</DesktopText>
      <Image src="/icons/forward.png" width="8px" height="14px" alt="forward" />
    </Container>
  );
}
