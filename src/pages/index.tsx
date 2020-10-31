import React from "react"
import Page from "../features/Page"
import { Typography } from "@material-ui/core"
import { Logo } from "../features/Logo"
import { Link } from "gatsby"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => createStyles({
  links: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  linkGroup: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}));

const Home = () => {
  const classes = useStyles()
  return (
    <Page header={false}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div className={classes.linkGroup}>
          <Logo style={{ width: "12em", height: "12em" }} />
          <Typography variant={"h1"}>dknr.io</Typography>
          <Link to={"/media"}>
            <Typography variant={"h4"}>Media</Typography>
          </Link>
          <a href={"https://www.youtube.com/channel/UCls1X6gA4eBHD1yC5aZT-qw"}>
            <Typography variant={"h4"}>YouTube</Typography>
          </a>
          <a href={"https://github.com/dknr"}>
            <Typography variant={"h4"}>GitHub</Typography>
          </a>
          <Link to={"/about"}>
            <Typography variant={"h4"}>About</Typography>
          </Link>
        </div>
        <div className={classes.linkGroup}>
          <Link to={"/rocks/music"}>
            <Typography variant={"h4"}>Stuff That Rocks</Typography>
          </Link>
        </div>
      </div>
    </Page>
  )
}

export default Home
