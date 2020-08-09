import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Oswald",
    h4: {
      fontSize: 20,
      fontWeight: "bold",
    },
    h5: {
      fontSize: 16,
    },
    h6: {
      fontSize: 16,
      fontVariant: "small-caps",
      fontWeight: "bold",
    },
    body1: {
      fontSize: 12,
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
