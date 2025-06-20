import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Card, CardContent, Stack, styled } from "@mui/material";

const ContainerFull = styled(Container)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled("label")(({ theme }) => ({
  backgroundColor: theme.palette.yellow,
  borderRadius: "4px",
  padding: "4px 12px",
  fontSize: "14px",
  fontWeight: "700",
}));

const Image = styled("img")`
  margin-bottom: 24px;
`;

const Title = styled(Typography)`
  font-size: 24px;
  font-weight: bold;
`;

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  color: theme.palette.grey,
}));

const ProfileName = styled(Typography)`
  font-size: 14px;
  font-weight: 700;
`;

export default function App() {
  return (
    <ContainerFull maxWidth="sm">
      <Card
        sx={{
          maxWidth: 384,
          borderRadius: "20px",
        }}
      >
        <CardContent
          sx={{
            padding: "24px",
          }}
        >
          <Image src="./src/assets/blogimage.png" alt="Card Image" />
          <Stack
            direction="column"
            alignItems={"flex-start"}
            spacing={"12px"}
            sx={{
              marginBottom: "24px",
            }}
          >
            <Label>Learning</Label>
            <Typography sx={{ fontSize: "14px" }}>
              Published 21 Dec 2023
            </Typography>
            <Title variant="h1">HTML & CSS foundations</Title>
            <Description>
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </Description>
          </Stack>
          <Stack direction="row" alignItems={"center"} spacing={"12px"}>
            <img src="./src/assets/userpic.png" alt="User Profile" />
            <ProfileName>Greg Hooper</ProfileName>
          </Stack>
        </CardContent>
      </Card>
    </ContainerFull>
  );
}
