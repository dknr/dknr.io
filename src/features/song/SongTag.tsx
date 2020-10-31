import React from "react"
import { Avatar, Chip, useTheme } from "@material-ui/core"

export const SongTag = ({ label, count, onClick, selected }: {
  label: string;
  count?: number;
  onClick?: () => void;
  selected?: boolean;
}) => {
  const theme = useTheme()
  return (
    <Chip
      avatar={count !== undefined &&
        <Avatar>
          {count.toString()}
        </Avatar>
      }
      label={label}
      onClick={onClick}
      color={selected ? 'primary' : 'default'}
      style={{
        marginRight: theme.spacing(0.5),
        marginTop: theme.spacing(0.5)
      }}
    />
  )
}