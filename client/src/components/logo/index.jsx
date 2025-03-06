import logoSrc from './icon.png';
import { Image, LogoContainer } from './style';

const Logo = ({ maxWidth = '30px' }) => {
  return (
    <LogoContainer>
      <Image src={logoSrc} $maxWidth={maxWidth} alt="LinkMe Logo" />
      {/* <LogoText>LinkMe</LogoText> */}
    </LogoContainer>
  );
};

export { Logo };
