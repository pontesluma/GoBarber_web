import React from 'react';

import { Container } from './style';

interface TooltipProps {
  text: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({
  text,
  className = '',
  children,
}) => {
  return (
    <Container className={className}>
      {children}
      <span>{text}</span>
    </Container>
  );
};

export default Tooltip;
