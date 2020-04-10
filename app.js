let friends = ["Rachel", "Bridget", "Maureen", "Dom", "Carlin"];
// Rachel drove over 100 potholes by dawn; she thought she had nothing to lose; except for her shoes; now Rachel has 99 cars on the lawn.
// Rachel drove over 2 potholes by dawn; she thought she had nothing to lose; except for her shoes; now Rachel has 1 car on the lawn.
// Rachel drove over 1 pothole by dawn; she thought she had nothing to lose; except for her shoes; but now Rachel has no cars on the lawn.

//outer loop for friends
for (let i = 0; i < friends.length; i++) {
    let friend = friends[i]
    console.groupCollapsed(friend.toUpperCase() + ':');

    //inner loop for song for each friend
    for (let n = 99; n >= 1; n--) {
        if (n === 1) {
            console.log(
                friend + " drove over " + n + " pothole by dawn; she thought she had nothing to lose; except for her shoes; now " +
                friend + " has no more cars on the lawn."

            );
        } else if (n === 2) {
            console.log(
                friend + " drove over " + n + " potholes by dawn; she thought she had nothing to lose; except for her shoes; now " +
                friend + " has " + (n - 1) + " car on the lawn."
            );
        } else {
            console.log(
                friend + " drove over " + n + " potholes by dawn; she thought she had nothing to lose; except for her shoes; now " +
                friend + " has " + (n - 1) + " cars on the lawn."
            );
        }
    }
    console.groupEnd();
}
