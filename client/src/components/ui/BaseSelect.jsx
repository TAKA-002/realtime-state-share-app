import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import memberData from "../../data/member.json";

const BaseSelect = ({ name, labelText, stateData, setState }) => {
  const handleChangeSelect = (e) => {
    setState(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 280 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor="uncontrolled-native">
          {labelText}
        </InputLabel>
        <NativeSelect
          value={stateData}
          inputProps={{
            name: `${name}`,
            id: "uncontrolled-native",
          }}
          onChange={handleChangeSelect}
        >
          <option value={100}>未使用</option>
          {memberData.members.map((data) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </NativeSelect>
      </FormControl>
    </Box>
  );
};

export default BaseSelect;
