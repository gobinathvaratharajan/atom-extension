import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  min-width: 100vw;
  background: ${(props) => props.theme.colors.bg};
`;

export const LogoWrapper = styled.div`
  margin-bottom: ${(props) => props.theme.spacing.md};
  text-align: center;
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.text.xl};
  margin-bottom: ${(props) => props.theme.spacing.lg};
  text-align: center;
`;

export const Content = styled.div`
  margin-top: ${(props) => props.theme.spacing.md};
  ${'' /* this make the child element evenly distributed */}
  > * + * {
    margin-top: ${(props) => props.theme.spacing.md};
  }
`;

export const SecondaryAction = styled(Link)`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  margin-top: ${(props) => props.theme.spacing.md};

  &:hover {
    color: ${(props) => props.theme.colors.primaryHover};
  }
`;
