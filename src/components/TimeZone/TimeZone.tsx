import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

interface ITimeZone {
  timezone: number;
  input: number;
}

const TimeZone = ({ timezone, input }: ITimeZone) => {
  return (
    <>
      {dayjs
        .unix(input)
        .utc()
        .utcOffset(timezone / 3600)
        .format("h : mm A")}
    </>
  );
};

export default TimeZone;
