import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const BaseSelect = ({ labelText }) => {
  return (
    <Box sx={{ minWidth: 280 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {labelText}
        </InputLabel>
        <NativeSelect
          defaultValue={1}
          inputProps={{
            name: "age",
            id: "uncontrolled-native",
          }}
        >
          <option value={1}>未使用</option>
          <option value={10}>テストの民１</option>
          <option value={20}>テストの民２</option>
          <option value={30}>テストの民３</option>
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default BaseSelect;
