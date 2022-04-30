import { Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import { useState } from 'react';
import { usePopper } from 'react-popper';
import styled from 'styled-components';

const PopoverButton = styled(Popover.Button)<any>`
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;
const PopoverPanel = styled(Popover.Panel)<any>`
  z-index: 20;
  position: absolute;
  background-color: white;
  width: 320px;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.05);
  border: 1px solid #e6e7eb;
  padding: 12px;
  border-radius: 8px;
`;

const InfoPopover = ({ info }: { info: string }) => {
  const [referenceElement, setReferenceElement] = useState(null);
  const [popperElement, setPopperElement] = useState(null);
  const [arrowElement, setArrowElement] = useState(null);
  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    modifiers: [{ name: 'arrow', options: { element: arrowElement } }],
  });

  const [isShowing, setIsShowing] = useState(false);

  return (
    <Popover style={{ position: 'relative' }}>
      <PopoverButton
        ref={setReferenceElement}
        onMouseEnter={() => setIsShowing(true)}
        onMouseLeave={() => setIsShowing(false)}
      >
        <Image src="/icons/info.png" width="15px" height="14px" alt="info" />
      </PopoverButton>
      <Transition show={isShowing}>
        <PopoverPanel ref={setPopperElement} style={styles.popper} {...attributes.popper}>
          {info}
        </PopoverPanel>
      </Transition>
    </Popover>
  );
};

export default InfoPopover;
