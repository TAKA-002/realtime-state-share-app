import Button from "@mui/material/Button";

const BaseButton = ({ setState }) => {
  const handleClick = (e) => {
    setState(100);
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      使用終了
    </Button>
  );
};

export default BaseButton;
