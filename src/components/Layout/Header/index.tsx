import { Container } from "./styles";
import { Typography } from "@mui/joy";

function Header() {
  return (
    <Container>
      <Typography textColor="white" level="h1">
        React Redux CRUD
      </Typography>
    </Container>
  );
}

export default Header;
