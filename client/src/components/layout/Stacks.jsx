import Stack from "@mui/material/Stack";

const StacksList = ({ mt, children }) => {
  return (
    <Stack direction="row" justifyContent="center" alignItems="center" spacing={2} style={{ marginTop: mt }}>
      {children}
    </Stack>
  );
};

export default StacksList;
