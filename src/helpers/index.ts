export const raiseArray = <T>(value: T | T[]): T[] => {
  if (Array.isArray(value))
    return value;
  return [value];
}

export const youtubeUrl = (ytid: string) => `https://www.youtube.com/watch?v=${ytid}?autoplay=1`;
