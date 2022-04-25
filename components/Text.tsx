import styled from 'styled-components';

type Colors = 'gray' | 'black';
type Sizes = 'small' | 'medium' | 'large';

interface StyledSpanProps {
  color: Colors;
  size: Sizes;
}

const StyledSpan = styled.span<StyledSpanProps>`
  font-family: 'Roboto', sans-serif;
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'medium' ? '14px' : '16px'};
  color: ${(props) => (props.color === 'gray' ? props.theme.colors.gray : '#333333')};
`;

export default function Text({
  children,
  color = 'black',
  size = 'medium',
}: {
  children: React.ReactNode;
  color?: Colors;
  size?: Sizes;
}) {
  return (
    <StyledSpan color={color} size={size}>
      {children}
    </StyledSpan>
  );
}
