// function number to hour and minute format
export const convertToHour = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration - minutes * 60;
  return `${minutes}:${seconds}`;
};
