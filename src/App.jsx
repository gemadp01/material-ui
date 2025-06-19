import styled from "styled-components";
import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  Container,
  Fade,
  Grow,
  Typography,
} from "@mui/material";
import { useState } from "react";

const StyledButton = styled(Button)`
  &&& {
    background-color: #6200ea;
    color: #fff;

    &:hover {
      background-color: #3700b3;
    }
  }
`;

const StyledHeading = styled(Typography)`
  color: red;
`;

const ButtonPrimary = styled(Button)(({ theme }) => ({
  color: "black",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("md")]: {
    backgroundColor: "#3700b3",
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.error.main,
    },
  },
}));

export default function App() {
  // state react
  const [isCheck, setCheck] = useState(false);

  const handleChange = () => {
    setCheck(!isCheck);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" sx={{ mb: 2 }}>
            Material UI Vite.js example
          </Typography>
          <StyledHeading>Warna Merah</StyledHeading>
          <StyledButton variant="contained">
            Styled Material-UI Button
          </StyledButton>
          <Button variant="contained">Material UI</Button>
          <ButtonPrimary>Material UI</ButtonPrimary>
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button>One</Button>
            <Button>Two</Button>
            <Button>Three</Button>
          </ButtonGroup>
        </Box>
        <Box>
          <Typography variant="h1" component="h2">
            h1. Heading
          </Typography>
        </Box>
        <Button onClick={handleChange}>Show Card</Button>
        <Fade in={isCheck}>
          <div>
            <BasicCard />
          </div>
        </Fade>
        <Grow
          in={isCheck}
          style={{ transformOrigin: "0 0 0" }}
          {...(isCheck ? { timeout: 1000 } : {})}
        >
          <div>
            <h1>Title Card</h1>
            <BasicCard />
          </div>
        </Grow>
      </Container>
    </>
  );
}

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
