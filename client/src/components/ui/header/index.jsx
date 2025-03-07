import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Content, Wrapper } from './style';
import { Logo } from 'components/ui';
import { actions } from 'constants/action';
import { useAppContext } from 'context';

export const Header = () => {
  const { dispatch } = useAppContext();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: actions.UPDATE_USER,
      payload: { details: null, token: null }
    });
    navigate('/login');
    toast.success('You are now logged out');
  };

  return (
    <Wrapper>
      <Content>
        <Logo />
        <Button onClick={handleLogout}>Logout</Button>
      </Content>
    </Wrapper>
  );
};
