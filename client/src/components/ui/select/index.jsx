import { Label, Error, SelectElement } from './style';

export const Select = ({
  selected,
  onChange,
  options = [],
  label = false,
  error = false,
  ...props
}) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <SelectElement value={selected} onChange={onChange} $hasError={!!error} {...props}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.text}
          </option>
        ))}
      </SelectElement>
      {error && <Error>{error}</Error>}
    </div>
  );
};
