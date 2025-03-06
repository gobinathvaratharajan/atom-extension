import styled from 'styled-components';

export const StyledView = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colors.bg};
  padding: ${(props) => props.theme.spacing.lg};
`;
