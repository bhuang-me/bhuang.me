import { createMuiTheme } from "@material-ui/core/styles"

const theme = createMuiTheme({
  typography: {
    fontFamily: "Roboto Mono, Roboto",
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
})

export default theme
