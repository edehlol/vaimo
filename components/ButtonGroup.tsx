import Image from 'next/image';
import styled from 'styled-components';

interface ButtonProps {
  primary?: boolean;
}
const Button = styled.button<ButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  border-radius: 20px;
  border: ${(props) => (props.primary ? 'none' : '1px solid #FF6600')};
  background-color: ${(props) => (props.primary ? '#FF6600' : 'transparent')};
  color: ${(props) => (props.primary ? '#FFFFFF' : '#FF6600')};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => (props.primary ? '#F25B00' : 'transparent')};
    border: ${(props) => (props.primary ? 'none' : '1px solid #F25B00')};
    color: ${(props) => (props.primary ? '#FFFFFF' : '#F25B00')};
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  }
  &:active {
    background-color: ${(props) => (props.primary ? '#D95100' : 'transparent')};
    border: ${(props) => (props.primary ? 'none' : '1px solid #D95100')};
    color: ${(props) => (props.primary ? '#FFFFFF' : '#D95100')};
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 12px;
  margin: 24px 0;
`;

export default function ButtonGroup() {
  return (
    <ButtonsContainer>
      <Button primary>Login to Purchase</Button>
      <Button>
        <Image src="/icons/envelope.png" width="14px" height="12px" alt="envelope" />
        <span style={{ marginLeft: '12px' }}>Contact the Supplier</span>
      </Button>
    </ButtonsContainer>
  );
}
