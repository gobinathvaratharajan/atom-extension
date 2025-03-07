import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const Image = styled.img`
  height: auto;
  max-width: ${(props) => props.$maxWidth};
  width: 100%;
`;

export const LogoText = styled.p`
  font-weight: 700;
  font-size: ${(props) => props.theme.text.xl};
  background: linear-gradient(90deg, #ff675f, #e2c568);
  -webkit-text-fill-color: transparent;
`;
