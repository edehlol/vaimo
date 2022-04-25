import styled from 'styled-components';
import Image from 'next/image';

const List = styled.div`
  display: inline-flex;
  align-items: center;
  height: 20px;

  border-radius: 2px;
  overflow: hidden;
`;

interface BadgeProps {
  primary?: boolean;
}
const Badge = styled.div<BadgeProps>`
  color: ${(props) => (props.primary ? 'white' : '#ff6600')};
  background-color: ${(props) => (props.primary ? '#ff6600' : '#fff0e6;')};
  padding: 2px 8px;
  font-size: 12px;
  line-height: 16px;
`;
const BadgeIcon = ({ src }: { src: string }) => {
  return <Image src={src} width="12px" height="12px" alt="Ok Icon" />;
};

export default function BadgeList() {
  return (
    <List>
      <Badge primary>Ready to Ship</Badge>
      <Badge>
        <BadgeIcon src="/icons/ok.png" /> In Stock
      </Badge>
      <Badge>
        <BadgeIcon src="/icons/ok.png" />
        Fast Dispatch
      </Badge>
    </List>
  );
}
