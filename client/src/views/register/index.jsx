import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import get from 'lodash/get';
import * as Yup from 'yup';

import { Content, LogoWrapper, Title, Wrapper, SecondaryAction } from './style';
import { useAppContext } from 'context';
import { useApi } from 'hooks/useApi';
import { actions } from 'constants/action';
import { Logo, Button, Card, Error, Input } from 'components/ui';

export const Register = () => {
  const { dispatch } = useAppContext();
  const { loading, postRequest } = useApi();
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required('A name is required'),
      email: Yup.string().email('A valid email is required').required('An email is required'),
      password: Yup.string().required('A password is required')
    }),
    onSubmit: async (values) => {
      setError(false);
      try {
        const res = await postRequest('auth/register', { ...values });
        if (res?.data) {
          dispatch({
            type: actions.UPDATE_USER,
            payload: {
              details: res.data.user,
              token: res.data.token
            }
          });
          navigate('/');
        } else {
          setError('An error has occured');
        }
      } catch (err) {
        const errorMsg = get(err, 'response.data.error', 'An error has occurred.');
        setError(errorMsg);
      }
    }
  });

  return (
    <Wrapper>
      <Card maxWidth={theme.sizes.md}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>Register your account</Title>
        {error && <Error>{error}</Error>}
        <form>
          <Content>
            <Input
              id="name"
              name="name"
              label="Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.touched.name && formik.errors.name}
              placeholder="Enter your name"
            />
            <Input
              id="email"
              type="email"
              name="email"
              label="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
              placeholder="Enter your email"
            />
            <Input
              id="password"
              type="password"
              name="password"
              label="Enter your Password"
              autocomplete="on"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
              placeholder="Enter a password"
            />
            <Button type="submit" onClick={formik.handleSubmit} isLoading={loading}>
              Register
            </Button>
          </Content>
        </form>
      </Card>
      <SecondaryAction to="/login">Already registered? Login now.</SecondaryAction>
    </Wrapper>
  );
};
