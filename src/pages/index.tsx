import React from "react"
import Page from "../features/Page"
import { Typography } from "@material-ui/core"
import { Logo } from "../features/Logo"
import { Link } from "gatsby"

const Home = () => (
  <Page header={false}>
    <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center'}}>
      <Logo style={{ width: "12em", height: "12em" }} />
      <Typography variant={"h1"}>dknr.io</Typography>
      <Typography variant={'h4'}>There isn't much here yet. Check back later!</Typography>
      <Link to={'/rocks/music'}>
        <Typography variant={'h4'}>Good Music</Typography>
      </Link>
    </div>
  </Page>
);

export default Home
