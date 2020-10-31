import React, { useCallback } from "react"
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles"
import { Card, CardContent, CardMedia, Link, Typography } from "@material-ui/core"
import { Song } from "../../data/music"
import { youtubeUrl } from "../../helpers"
import { SongTag } from "./SongTag"
import { OpenInNew } from "@material-ui/icons"

export type MusicCardProps = {
  song: Song;
  onClick?: (song: Song) => void;
}

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
  },
  link: {
    '&:hover': {
      textDecoration: 'none',
    },
  },
  cover: {
    height: 240
  },
  tag: {
    marginTop: theme.spacing(0.5),
    marginRight: theme.spacing(0.5),
  },
  hint: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    verticalAlign: 'center',
    textDecoration: 'underline',
    filter: 'drop-shadow(0px 0px 7px #110000)'
  },
  hintIcon: {
    zIndex: 1,
    margin: theme.spacing(1),
  }
}));

export const SongCard = ({ song, onClick }: MusicCardProps) => {
  const classes = useStyles()

  const handleClick = useCallback(() => {
    if (onClick === undefined) {
      return
    }
    onClick(song)
  }, [song, onClick])

  return (
    <Link href={youtubeUrl(song.youtube)} target={"_blank"} className={classes.link}>
      <Card className={classes.root} onClick={handleClick}>
        <CardMedia
          className={classes.cover}
          image={`https://i.ytimg.com/vi/${song.youtube}/hqdefault.jpg`}
          title={`${song.title} album cover`}
        >
          <Typography className={classes.hint}>
            <OpenInNew className={classes.hintIcon}/>
            Play on YouTube
          </Typography>
        </CardMedia>
        <CardContent>
          <Typography component={"h5"} variant={"h5"}>
            {song.title}
          </Typography>
          <Typography variant={"subtitle1"}>
            {song.artist}
          </Typography>
          {song.tags.map((tag) => (
            <SongTag label={tag} />
          ))}
        </CardContent>
      </Card>
    </Link>
  )
}