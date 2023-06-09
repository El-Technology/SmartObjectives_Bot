import { Box } from "@mui/material";
import { ReactNode } from "react";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/Sidebars/Sidebar";

export const MainPageLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: {
            xs: "100%",
            sm: "calc(100vw - 91px)",
            md: "calc(100vw - 91px)",
            xl: "calc(100vw - 91px)",
          },
          height: "auto",
          maxHeight: {
            xs: "auto",
            sm: "calc(100vh - 70px)"
          },
          position: "absolute",
          overflowY: "auto",
          overflowX: "hidden",
          left: {
            xs: 0,
            sm: "91px",
            md: "91px",
            xl: "91px",
          },
          paddingLeft: {
            xs: "30px",
            sm: "70px",
            md: "70px",
            xl: "70px",
          },
          paddingTop: "30px",
          paddingBottom: "30px",
          paddingRight: {
            xs: "30px",
            sm: "82px",
            md: "82px",
            xl: "82px",
          },
          backgroundColor: "#EFEFEF",
          boxSizing: "border-box",
        }}
      >
        <Box position="relative" flexGrow={1} display={"flex"}>
          {children}
        </Box>
      </Box>

      <Sidebar />
    </Box>
  );
};
