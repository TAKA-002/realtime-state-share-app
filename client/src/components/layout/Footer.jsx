import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Footer = () => {
  return (
    <>
      <AppBar component="footer" position="static" sx={{ backgroundColor: "#000000" }}>
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="caption">©2023</Typography>
          </Box>
        </Container>
      </AppBar>
    </>
  );
};

export default Footer;
