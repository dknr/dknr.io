import React from "react"
import Page from "../../features/Page"
import { Typography } from "@material-ui/core"
import { Link } from "gatsby"

export default () => (
  <Page title={"Media"}>
    <Link to={"/media/games"}>
      <Typography variant={"h4"}>Games</Typography>
    </Link>
    <Typography variant={"h4"}>There's not much here yet. Check back later!</Typography>
  </Page>
)