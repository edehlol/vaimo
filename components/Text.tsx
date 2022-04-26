import styled from 'styled-components';

type Colors = 'gray' | 'black' | 'orange';
type Sizes = 'small' | 'medium' | 'large';
type Weights = 'normal' | 'semibold' | 'bold';

interface StyledSpanProps {
  color: Colors;
  size: Sizes;
  weight: Weights;
}

const StyledSpan = styled.span<StyledSpanProps>`
  font-family: 'Roboto', sans-serif;
  line-height: ${(props) => (props.size === 'small' ? '16px' : '24px')};
  font-size: ${(props) =>
    props.size === 'small' ? '12px' : props.size === 'medium' ? '14px' : '16px'};
  font-weight: ${(props) =>
    props.weight === 'normal' ? '400' : props.weight === 'semibold' ? '500' : '700'};
  color: ${(props) =>
    props.color === 'gray'
      ? props.theme.colors.gray
      : props.color === 'orange'
      ? props.theme.colors.orange
      : '#333333'};
`;

export default function Text({
  children,
  color = 'black',
  size = 'medium',
  weight = 'normal',
  style,
}: {
  children: React.ReactNode;
  color?: Colors;
  size?: Sizes;
  weight?: Weights;
  style?: React.CSSProperties;
}) {
  return (
    <StyledSpan color={color} size={size} weight={weight} style={style}>
      {children}
    </StyledSpan>
  );
}
