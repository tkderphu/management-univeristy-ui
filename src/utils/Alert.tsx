import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props: any) {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity={props.type}>{props.message}</Alert>
    </Stack>
  );
}

export class AlertInfo {
    type: string = 'success'
    message: string = ''
}