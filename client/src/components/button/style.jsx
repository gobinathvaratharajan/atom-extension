import styled from 'styled-components';

export const ButtonElement = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.bg};
  border: none;
  font-weight: 500;
  font-size: ${(props) => props.theme.text.sm};
  padding: ${(props) => props.theme.spacing.sm};
  border-radius: ${(props) => props.theme.borderRadius};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    opacity: 0.8;
    background: ${(props) => props.theme.colors.primaryHover};
  }
`;
