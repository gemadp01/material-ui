import styled from "styled-components";
import { Box, Button, Container, Typography } from "@mui/material";

const StyledButton = styled(Button)`
  &&& {
    background-color: #6200ea;
    color: #fff;

    &:hover {
      background-color: #3700b3;
    }
  }
`;

function App() {
  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Vite.js example
          </Typography>
          <StyledButton variant="contained">
            Styled Material-UI Button
          </StyledButton>
          <Button variant="contained">Material UI</Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
