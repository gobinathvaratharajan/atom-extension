import { CardElement } from './style';

export const Card = ({
  children,
  maxWidth = false,
  noPadding = false,
  fullHeight = false,
  ...props
}) => {
  return (
    <CardElement $maxWidth={maxWidth} $noPadding={noPadding} $fullHeight={fullHeight} {...props}>
      {children}
    </CardElement>
  );
};
