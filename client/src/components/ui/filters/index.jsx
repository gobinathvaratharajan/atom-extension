import { Wrapper, Reset } from './style';
import { Select, Card, Input } from 'components/ui';

const options = [
  {
    value: 1,
    text: 'Newest first'
  },
  {
    value: 2,
    text: 'Oldest first'
  }
];

export const Filter = () => {
  return (
    <Card>
      <Wrapper>
        <div>
          <Input value="" onChange={() => {}} placeholder="Enter your search term" label="Search" />
        </div>
        <div>
          <Select value={1} onChange={() => {}} label="Sort by" options={options} />
        </div>
        <div>
          <Reset onClick={() => {}}>Reset filters</Reset>
        </div>
      </Wrapper>
    </Card>
  );
};
