import React from "react"
import Page from "../../../features/Page"
import { Typography } from "@material-ui/core"

export default () => (
  <Page title={"Games"}>
    <a href={"/media/games/flatlander"}>
      <Typography variant={"h4"}>Flatlander</Typography>
    </a>
  </Page>
)