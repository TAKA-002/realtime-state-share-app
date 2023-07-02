import io from "socket.io-client";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";
import memberData from "../../data/member.json";

const socket = io("http://localhost:5001");

const BaseSelect = ({ name, labelText, stateData, setState }) => {
  const handleChangeSelect = (e) => {
    setState(e.target.value);

    // サーバーへ送信
    socket.emit("send_name_id", { name_id: e.target.value, formName: name });
  };

  // サーバーから受信
  socket.on("recieved_name_id", (data) => {
    if (data.formName === name) {
      console.log(data);
      setState(data.name_id);
    }
  });

  return (
    <Box sx={{ minWidth: 280 }}>
      <FormControl fullWidth>
        <InputLabel variant="standard" htmlFor={`${name}-native`}>
          {labelText}
        </InputLabel>
        <NativeSelect
          value={stateData}
          inputProps={{
            name: `${name}`,
            id: `${name}-native`,
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
