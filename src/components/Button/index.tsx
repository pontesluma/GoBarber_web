import React, { ButtonHTMLAttributes } from 'react';

import { FiLoader } from 'react-icons/fi';
import { Container, Loading } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
};

const Button: React.FC<ButtonProps> = ({ children, loading, ...rest }) => (
  <Container type="button" {...rest}>
    {loading ? (
      <Loading>
        <FiLoader size={25} />
      </Loading>
    ) : (
      children
    )}
  </Container>
);

export default Button;
