import Image from 'next/image';
import styled from 'styled-components';
import Text from './Text';

const Container = styled.div`
  padding: 28px 26px;
  align-self: stretch;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

const DurationContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
`;

interface ButtonProps {
  primary?: boolean;
}

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 24px 0;
`;

const Button = styled.button<ButtonProps>`
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #FF6600')};
  background-color: ${(props) => (props.primary ? '#FF6600' : 'transparent')};
  color: ${(props) => (props.primary ? '#FFFFFF' : '#FF6600')};
`;

export default function AddToBox() {
  return (
    <Container>
      <Row>
        <Text color="gray">Ship to South Africa by Express UPS Sav…</Text>
        <Text size="large">
          <b>R 6,036.74</b>
        </Text>
      </Row>

      <DurationContainer>
        <Text color="gray">
          Lead Time <b>10</b> days{' '}
          <Image src="/icons/info.png" width="15px" height="14px" alt="info" />
        </Text>
        <Text color="gray">
          Shipping time <b>6-10</b> days{' '}
          <Image src="/icons/info.png" width="15px" height="14px" alt="info" />
        </Text>
      </DurationContainer>
      <ButtonsContainer>
        <Button primary>Login to Purchase</Button>
        <Button>Contact the Supplier</Button>
      </ButtonsContainer>
    </Container>
  );
}
