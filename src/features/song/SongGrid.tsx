import { Song } from "../../data/music"
import { Card, CardContent, Grid } from "@material-ui/core"
import { SongCard } from "./SongCard"
import React, { useState } from "react"
import { SongTag } from "./SongTag"

export const SongGrid = ({ songs }: { songs: Song[] }) => {
  const tags = Array.from(songs.reduce(
    (tags, song) => {
      song.tags.forEach((tag) => {
        const count = tags.get(tag) || 0;
        tags.set(tag, count + 1);
      })
      return tags
    },
    new Map<string, number>()
  ).entries());
  tags.sort(([,a],[,b]) => b - a);
  const [selectedTag, setSelectedTag] = useState(undefined as string | undefined)

  const filteredSongs = selectedTag
    ? songs.filter((song) => song.tags.includes(selectedTag))
    : songs

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Card>
          {/*<CardHeader title={'Filter by tag'}/>*/}
          <CardContent>
            <SongTag
              label={"All"}
              count={songs.length}
              onClick={() => setSelectedTag(undefined)}
              selected={selectedTag === undefined}
            />
            {tags.map(([tag, count]) => (
              <SongTag
                label={tag}
                count={count}
                onClick={() => setSelectedTag(tag)}
                selected={tag === selectedTag}
              />
            ))}
          </CardContent>
        </Card>
      </Grid>
      {filteredSongs.map((song) => (
        <Grid item xs={12} sm={6} md={6} lg={3} xl={2}>
          <SongCard song={song} />
        </Grid>
      ))}
    </Grid>
  )
}
