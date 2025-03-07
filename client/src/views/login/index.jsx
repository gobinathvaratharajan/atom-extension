import { useTheme } from 'styled-components';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import get from 'lodash/get';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import { Button, Card, Error, Input, Logo } from 'components/ui';
import { Content, LogoWrapper, Title, Wrapper, SecondaryAction } from './style';
import { useAppContext } from 'context';
import { useApi } from 'hooks/useApi';
import { actions } from 'constants/action';

export const Login = () => {
  const { dispatch } = useAppContext();
  const [error, setError] = useState(false);
  const { loading, postRequest } = useApi();
  const navigate = useNavigate();
  const theme = useTheme();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Please provide your email'),
      password: Yup.string().required('Please provide your password')
    }),
    onSubmit: async (values) => {
      setError(false);
      try {
        const res = await postRequest('auth/login', { ...values });
        if (res.data) {
          dispatch({
            type: actions.UPDATE_USER,
            payload: {
              details: get(res, 'data.user', {}),
              token: get(res, 'data.token', '')
            }
          });
          toast.success('Logged in successfully');
          navigate('/');
        } else {
          setError('Something went wrong');
        }
      } catch (err) {
        setError(get(err, 'response.data.error', 'Something went wrong'));
      }
      console.log(values);
    }
  });
  return (
    <Wrapper>
      <Card maxWidth={theme.sizes.md}>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Title>Login to your account</Title>
        {error && <Error>{error}</Error>}
        <form onSubmit={formik.handleSubmit}>
          <Content>
            <Input
              id="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              error={formik.touched.email && formik.errors.email}
            />
            <Input
              id="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              error={formik.touched.password && formik.errors.password}
            />
            <Button type="submit" isLoading={loading}>
              Login
            </Button>
          </Content>
        </form>
      </Card>
      <SecondaryAction to="/register">Not registered? register now</SecondaryAction>
    </Wrapper>
  );
};
