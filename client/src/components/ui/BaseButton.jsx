import Button from "@mui/material/Button";

const BaseButton = ({ setState }) => {
  const iniStateVal = 100;

  const handleClick = (e) => {
    setState(iniStateVal);
  };

  return (
    <Button variant="outlined" onClick={handleClick}>
      使用終了
    </Button>
  );
};

export default BaseButton;
