import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.success};
  border-radius: ${(props) => props.theme.borderRadius};
  color: ${(props) => props.theme.colors.bg};
  font-size: ${(props) => props.theme.text.sm};
  padding: ${(props) => props.theme.spacing.sm};
`;
