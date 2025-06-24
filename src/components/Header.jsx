import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Stack,
  Container,
} from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#6A1B9A", borderRadius: 0 }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, fontWeight: "bold", ml: 2 }}
          >
            Cadastro de Produtos
          </Typography>
          <Stack direction="row" spacing={2} mr={2}>
            <Button
              color="secondary"
              variant={location.pathname === "/" ? "contained" : "outlined"}
              component={RouterLink}
              to="/"
              startIcon={<ListAltIcon />}
              sx={{
                backgroundColor:
                  location.pathname === "/" ? "#AB47BC" : "transparent",
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "#9C27B0",
                  borderColor: "#fff",
                },
              }}
            >
              Produtos
            </Button>
            <Button
              color="secondary"
              variant={
                location.pathname === "/novo" ? "contained" : "outlined"
              }
              component={RouterLink}
              to="/novo"
              startIcon={<AddCircleOutlineIcon />}
              sx={{
                backgroundColor:
                  location.pathname === "/novo" ? "#AB47BC" : "transparent",
                color: "#fff",
                borderColor: "#fff",
                "&:hover": {
                  backgroundColor: "#9C27B0",
                  borderColor: "#fff",
                },
              }}
            >
              Novo Produto
            </Button>
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
