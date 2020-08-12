import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Oswald, Roboto",
    h4: {
      fontSize: 24,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 16,
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
      fontSize: 16,
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
  },
})

export default theme
