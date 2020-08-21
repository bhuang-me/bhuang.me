import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Oswald, Roboto",
    h4: {
      fontSize: "min(24px, 3vh)",
      fontWeight: "bold",
    },
    h6: {
      fontSize: 14,
      fontWeight: "bold",
      color: "rgba(0, 255, 201, 1)",
    },
    subtitle1: {
      fontSize: 16,
    },
    subtitle2: {
      fontSize: "min(16px, 2vh)",
      fontWeight: "bold",
    },
    body1: {
      fontSize: 14,
    },
  },
  overrides: {
    MuiCard: {
      root: {
        borderRadius: "10px",
        boxShadow: "none",
      },
    },
    MuiCardContent: {
      root: {
        paddingTop: "8px",
        paddingBottom: "8px",
      },
    },
  },
})

export default theme
