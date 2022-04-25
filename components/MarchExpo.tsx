import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  background-color: #fff0e6;
  color: #ff6600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 16px;
`;

export default function MarchExpo() {
  return (
    <Container>
      <Image src="/expo.png" width="76px" height="40px" alt="march expo" />
      <div>• Free shipping (up to $40)</div>
      <Image src="/icons/forward.png" width="8px" height="14px" alt="forward" />
    </Container>
  );
}
