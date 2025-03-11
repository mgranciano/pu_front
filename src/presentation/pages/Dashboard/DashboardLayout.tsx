import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { Menu, Home, Person, Settings } from "@mui/icons-material";
import { styled } from "@mui/material/styles";

const drawerWidth = 280;

const LayoutContainer = styled(Box)`
  display: flex;
  height: 100vh;
`;

const StyledDrawer = styled(Drawer)<{ open: boolean }>`
  width: ${(props) => (props.open ? `${drawerWidth}px` : "65px")};
  flex-shrink: 0;
  white-space: nowrap;
  transition: width 0.3s ease-in-out;

  & .MuiDrawer-paper {
    width: ${(props) => (props.open ? `${drawerWidth}px` : "65px")};
    background: #f4f6f8;
    transition: width 0.3s ease-in-out;
  }
`;

const StyledAppBar = styled(AppBar)<{ open: boolean }>`
  background: #f4f6f8;
  color: black;
  transition: margin 0.3s ease-in-out;
  margin-left: ${(props) => (props.open ? `${drawerWidth}px` : "65px")};
  width: ${(props) =>
    props.open ? `calc(100% - ${drawerWidth}px)` : "calc(100% - 65px)"};
`;

const Main = styled(Box)<{ open: boolean }>`
  flex-grow: 1;
  padding: 16px;
  background: white;
  transition: margin 0.3s ease-in-out;
  margin-left: ${(props) => (props.open ? `${drawerWidth}px` : "65px")};
`;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);

  const handleButtonClick = () => {
    console.log("Botón de acción clickeado");
    // Aquí puedes agregar una acción como navegación o abrir un modal
  };

  return (
    <LayoutContainer>
      <CssBaseline />
      
      {/* Encabezado */}
      <StyledAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton onClick={() => setOpen(!open)}>
            <Menu />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>

          {/* 🔹 Botón en el lado derecho */}
          <Box sx={{ marginLeft: "auto" }}>
            <Button variant="contained" color="primary" onClick={handleButtonClick}>
              Acción
            </Button>
          </Box>
        </Toolbar>
      </StyledAppBar>

      {/* Sidebar */}
      <StyledDrawer variant="permanent" open={open}>
        <Toolbar />
        <List>
          <ListItem component="button">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            {open && <ListItemText primary="Inicio" />}
          </ListItem>
          <ListItem component="button">
            <ListItemIcon>
              <Person />
            </ListItemIcon>
            {open && <ListItemText primary="Perfil" />}
          </ListItem>
          <ListItem component="button">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            {open && <ListItemText primary="Configuración" />}
          </ListItem>
        </List>
      </StyledDrawer>

      {/* Contenido Principal */}
      <Main open={open}>
        <Toolbar />
        {children}
      </Main>
    </LayoutContainer>
  );
};

export default DashboardLayout;