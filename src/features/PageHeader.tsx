import { AppBar, Typography } from "@material-ui/core"
import React from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Link } from "gatsby"

type PageHeaderProps = {
  title: string;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  logo: {},
  title: {
    paddingLeft: theme.spacing(2),
    verticalAlign: "center",
    color: theme.palette.primary.contrastText,
  }
}))

export const PageHeader = ({ title }: PageHeaderProps) => {
  const classes = useStyles()
  return (
    <AppBar position={"static"} className={classes.root}>
      <Link to={"/"}>
        <img src={"/logo.svg"} className={classes.logo} />
      </Link>
      <Typography variant={"h4"} className={classes.title}>
        {title}
      </Typography>
    </AppBar>
  )
}
