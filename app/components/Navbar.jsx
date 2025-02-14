"use client";

import {
  AppBar,
  Toolbar,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SearchIcon from "@mui/icons-material/Search";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <AppBar color="warning" position="relative" sx={{ p: 2 }}>
      <Toolbar>
        <Stack
          direction={"row"}
          gap={4}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Link
            style={{
              color: pathName == "/" && "white",
              fontWeight: pathName == "/" && 900,
              fontSize: pathName == "/" && "1.5rem",
            }}
            href={"/"}
          >
            Home
          </Link>
          <Link
            style={{
              color: pathName == "/contact" && "white",
              fontWeight: pathName == "/contact" && 900,
              fontSize: pathName == "/contact" && "1.5rem",
            }}
            href={"/contact"}
          >
            Contact
          </Link>
          <Link
            style={{
              color: pathName == "/help" && "white",
              fontWeight: pathName == "/help" && 900,
              fontSize: pathName == "/help" && "1.5rem",
            }}
            href={"/help"}
          >
            Help
          </Link>
          <form action="/">
            <TextField
              placeholder="Harry Potter and the Sorcerer's Stone"
              label="Search"
              name="title"
              size="small"
              slotProps={{
                htmlInput: {
                  style: {
                    color: "white",
                  },
                },

                input: {
                  endAdornment: (
                    <InputAdornment>
                      <IconButton
                        color="inherit"
                        sx={{
                          width: 32,
                          height: 32,
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </form>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
