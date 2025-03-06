import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.error};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.text.sm};
  padding: ${(props) => props.theme.spacing.sm};
`;
