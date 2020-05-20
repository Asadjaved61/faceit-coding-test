export const formatDateAndTime = (startDate: string): string => {
  const date: Date = new Date(startDate);

  let day: any = date.getDate();
  day = day < 10 ? `0${day}` : day;

  let month: any = date.getMonth() + 1;
  month = month < 10 ? `0${month}` : month;

  const year = date.getFullYear();
  let hour: any = date.getHours();
  hour = hour < 10 ? `0${hour}` : hour;

  let min: any = date.getMinutes();
  min = min < 10 ? `0${min}` : min;

  let sec: any = date.getSeconds();
  sec = sec = sec < 10 ? `0${sec}` : sec;

  return `${day}/${month}/${year}, ${hour}:${min}:${sec}`;
};
