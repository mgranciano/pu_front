import styled from "styled-components";
import { Box, Drawer, AppBar } from "@mui/material";

const drawerWidth = 280; // 🔹 Define el ancho del menú

export const LayoutContainer = styled(Box)`
  display: flex;
  height: 100vh;
`;

export const StyledDrawer = styled(Drawer)<{ open: boolean }>`
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

export const DrawerHeader = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  height: 65px;
`;

export const StyledAppBar = styled(AppBar)<{ open: boolean }>`
  background: #f4f6f8;
  color: black;
  transition: margin 0.3s ease-in-out;
  margin-left: ${(props) => (props.open ? `${drawerWidth}px` : "65px")};
  width: ${(props) => (props.open ? `calc(100% - ${drawerWidth}px)` : "calc(100% - 65px)")};
`;

export const Main = styled(Box)<{ open: boolean }>`
  flex-grow: 1;
  transition: margin 0.3s ease-in-out;
  margin-left: ${(props) => (props.open ? `${drawerWidth}px` : "65px")};
`;

export const Content = styled(Box)`
  margin-top: 65px;
  padding: 20px;
  background: white;
  min-height: calc(100vh - 65px);
`;