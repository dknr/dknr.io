import React from "react"
import Page from "../../features/Page"
import { songs } from "../../data/music"
import { SongGrid } from "../../features/song/SongGrid"

export default () => (
  <Page title={"Music"}>
    <SongGrid songs={songs}/>
  </Page>
);
