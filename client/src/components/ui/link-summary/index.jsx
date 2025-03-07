import Truncate from 'react-truncate-markup';

import { Details, Link, Title, Domain, Edit } from './style';
import { Card } from 'components/ui';

export const LinkSummary = () => {
  return (
    <Link href="https://www.google.com" target="_blank">
      <Card fullHeight>
        <Edit>Edit</Edit>
        <Details>
          <Domain>google.com</Domain>
          <Truncate lines={3}>
            <Title>Google</Title>
          </Truncate>
        </Details>
      </Card>
    </Link>
  );
};
