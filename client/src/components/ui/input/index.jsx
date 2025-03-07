import { Label, InputElement, Error } from './style';

export const Input = ({ label = false, type = 'text', error = false, ...rest }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <InputElement type={type} $hasError={!!error} {...rest} />
      {error && <Error>{error}</Error>}
    </div>
  );
};
