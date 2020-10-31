import { createMuiTheme, CssBaseline } from "@material-ui/core"
import React from "react"
import { createStyles, makeStyles, Theme, ThemeProvider } from "@material-ui/core/styles"
import { PageHeader } from "./PageHeader"
import "fontsource-overpass";
import { deepOrange, orange, teal } from "@material-ui/core/colors"
import {Helmet} from "react-helmet"

const useStyles = makeStyles((theme: Theme) => createStyles({
  '@global': {
    'a': {
      color: deepOrange["500"],
    },
    'a:visited': {
      color: orange["500"],
    }
  },
  content: {
    margin: theme.spacing(2)
  }
}));

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: deepOrange,
    secondary: teal,
  },
  typography: {
    fontFamily: "Overpass",
  },
})

type PageProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
  header?: boolean;
}

const Page = ({ children, title, header = true }: PageProps) => {
  const classes = useStyles()
  return (
    <ThemeProvider theme={theme}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `dknr.io - ${title}` : 'dknr.io'}</title>
      </Helmet>
      <CssBaseline />
      {header && <PageHeader title={title || 'dknr.io'}/>}
      <div className={classes.content}>
        {children}
      </div>
    </ThemeProvider>
  )
}

export default Page