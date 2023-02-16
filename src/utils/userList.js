export default function userList(activitiesList) {
    const users = [];
    activitiesList.forEach((activity) => {
        const found = users.findIndex((user) => user.id === activity.doneBy._id);

        if (found === -1) {
            users.push({
                id: activity.doneBy._id,
                name: activity.doneBy.name,
                points: activity.typeId.points,
            });
        } else {
            users[found].points += activity.typeId.points;
        }
    });
    return users;
}