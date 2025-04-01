import React from 'react';
import { Pagination, Stack, Typography } from '@mui/material';

const CustomPagination = ({ count, page, onPageChange, itemsPerPage }) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" justifyContent="center" mt={2}>
      <Typography variant="body2">
        {`${(page - 1) * itemsPerPage + 1}-${Math.min(page * itemsPerPage, count)} of ${count}`}
      </Typography>
      <Pagination
        count={Math.ceil(count / itemsPerPage)}
        page={page}
        onChange={onPageChange}
        color="primary"
      />
    </Stack>
  );
};

export default CustomPagination;