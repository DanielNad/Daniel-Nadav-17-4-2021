import moment from "moment";

export default function GridHeader({ day }) {
  return <div>{moment(day).format("dddd").toString()}</div>;
}
