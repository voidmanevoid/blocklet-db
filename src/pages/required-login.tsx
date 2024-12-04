import { Alert, Box, Button, Grid } from '@mui/material';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useSessionContext } from '../contexts/session';

type RequiredLoginProps = {
  onLogin?: Function;
  nextUrl?: undefined | string;
} & import('@mui/material').GridProps;

/**
 * @description
 * @param {{
 *  onLogin: Function,
 *  nextUrl: undefined | string,
 * } & import('@mui/material').GridProps} { onLogin = () => {}, nextUrl = undefined, ...rest }
 * @return {*}
 */
function RequiredLogin({ onLogin = () => {}, nextUrl = undefined, ...rest }: Readonly<RequiredLoginProps>) {
  const { session } = useSessionContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (session.user) {
      navigate(`${nextUrl}${window.location.search}`, { replace: false });
    }
  }, [session.user, navigate, nextUrl]);

  return (
    <Grid container justifyContent="center" {...rest}>
      <Grid item justifyContent="center" textAlign="center" xl={12} lg={12}>
        <Box sx={{ mb: 2, mt: 2 }} display="flex" justifyContent="center">

          <img
            src="/bm9000.png"
            alt="BM-9000"
          />
          </Box>
        <Box sx={{ mb: 2 }} width={'100%'} display="flex" justifyContent="center">
        <Alert severity="error">Connect your DID Wallet to login</Alert>
        </Box>
        <Button
          onClick={() => session.login(onLogin)}
          style={{ marginTop: 16 }}
          variant="contained"
          >
          Login
        </Button>
      </Grid>
    </Grid>
  );
}

export default RequiredLogin;
