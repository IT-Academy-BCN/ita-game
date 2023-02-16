import { DateTime } from "luxon";

export default function filterByLastWeek(activitiesList) {
    const weekTimestamp = Math.floor(Date.now() / 1000);
    const weekDate = DateTime.fromMillis(weekTimestamp * 1000);
    const startOfWeek = weekDate.startOf("week");

    return activitiesList.filter((item) => {
        const itemDate = DateTime.fromMillis(Date.parse(item.doneDate));
        return (
            itemDate >= startOfWeek && itemDate < startOfWeek.plus({ weeks: 1 })
        );
    });
}