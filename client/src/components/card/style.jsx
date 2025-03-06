import styled from 'styled-components';

export const CardElement = styled.div`
  background: ${(props) => props.theme.colors.bg};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  width: 100%;
  ${(props) => (props.$maxWidth ? `max-width: ${props.$maxWidth};` : '')};
  ${(props) => (props.$noPadding ? `padding: ${props.theme.spacing.md};` : `padding: 16px`)};
  ${(props) => (props.$fullHeight ? `height: 100%;` : '')};
  transition: all 0.2s ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;
