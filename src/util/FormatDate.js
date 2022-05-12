import Moment from "moment";

export default function FormatDate(datetime) {
    return Moment(datetime).format("MMMM YYYY");
}