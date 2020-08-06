// import { parseISO, format } from "date-fn";
import { parseISO, format } from "date-fns";

export default function DateFormater({ dateString }) {
  const date = parseISO(dateString);
  return (
    <time dateTime={dateString}>
      <p>{format(date, "LLLL	d, yyyy")}</p>
    </time>
  );
}
