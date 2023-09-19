import io from "socket.io-client";
import Button from "@mui/material/Button";

const socket = io("http://localhost:5001");

const DeleteBtn = ({ name, setState }) => {
  const noUseState = "100";

  const handleDelete = (e) => {
    setState(noUseState);
    // サーバーへ送信
    socket.emit("send_name_id", { name_id: noUseState, formName: name });
  };

  return (
    <Button variant="outlined" onClick={handleDelete}>
      使用終了
    </Button>
  );
};

export default DeleteBtn;
