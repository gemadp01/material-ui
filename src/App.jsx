import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Card, CardContent, Stack, styled } from "@mui/material";

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
  fontSize: "12px",
  fontWeight: "700",
  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
  },
}));

const Image = styled("img")`
  marginbottom: "24px";
  width: "100%";
`;

const Title = styled(Typography)(({ theme }) => ({
  fontSize: "20px",
  fontWeight: "700",
  [theme.breakpoints.up("sm")]: {
    fontSize: "24px",
  },
  "&:hover": {
    color: theme.palette.yellow,
    cursor: "pointer",
  },
}));

const Date = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  fontWeight: "400",
  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
  },
}));

const Description = styled(Typography)(({ theme }) => ({
  fontSize: "12px",
  color: theme.palette.grey,
  fontWeight: "500",
  [theme.breakpoints.up("sm")]: {
    fontSize: "14px",
  },
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
            <Date>Published 21 Dec 2023</Date>
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
