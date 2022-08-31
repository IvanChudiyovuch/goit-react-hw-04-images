import PropTypes from 'prop-types';
import { Btn, Container } from './Button.styled';

export const Button = ({ onClick, children }) => {
  return (
    <Container>
      <Btn onClick={onClick} type="button">
        {children}
      </Btn>
    </Container>
  );
};

Button.propType = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
