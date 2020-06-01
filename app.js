document.addEventListener("DOMContentLoaded", singButton);
function singButton() {

    //Sing song lyrics with button click
    let btn = document.querySelector("button")
    btn.addEventListener("click", buttonClick);

    function buttonClick() {

        //Add array of friends
        let friends = [
            "Rachel",
            "Bridget",
            "Maureen",
            "Dom",
            "Carlin"
        ];

        //Loop friend names
        for (let i = 0; i < friends.length; i++) {
            let friend = friends[i]

            //Create div
            let div = document.createElement("div");
            div.className = "friend";

            //Create h3 for friend names and attach div
            let h3 = document.createElement("h3");
            let friendHeadings = document.createTextNode(friend + ":");
            h3.appendChild(friendHeadings);
            div.appendChild(h3);
            document.body.appendChild(div);

            //Loop song lyrics from 99 to 1 & for each friend
            for (let n = 99; n >= 1; n--) {

                //LAST SONG LYRIC: (Friend) drove over 1 pothole by dawn; she had nothing to lose; except for her shoes; but now (Friend) has no more cars on the lawn.
                if (n === 1) {
                    let p1 = document.createElement("p");
                    let verseOne = document.createTextNode(
                        friend + " drove over " + n + " pothole by dawn; she had nothing to lose; except for her shoes; now " +
                        friend + " has no more cars on the lawn."
                    );

                    //Attach paragraph to body & paragraph to div
                    p1.appendChild(verseOne);
                    document.body.appendChild(p1);
                    div.appendChild(p1);

                //SECOND TO LAST SONG LYRIC:(Friend) drove over 2 potholes by dawn; she had nothing to lose; except for her shoes; now (Friend) has 1 car on the lawn. 
                } else if (n === 2) {
                    let p2 = document.createElement("p");
                    let verseTwo = document.createTextNode(
                        friend + " drove over " + n + " potholes by dawn; she had nothing to lose; except for her shoes; now " +
                        friend + " has " + (n - 1) + " car on the lawn."
                    );

                    //Attach paragraph to body & paragraph to div
                    p2.appendChild(verseTwo);
                    document.body.appendChild(p2);
                    div.appendChild(p2);


                //FIRST SONG LYRICS TO FINAL: (Friend) drove over 99 potholes by dawn; she had nothing to lose; except for her shoes; now (Friend) has 98 cars on the lawn.
                } else {
                    let p3 = document.createElement("p");
                    let verseThree = document.createTextNode(
                        friend + " drove over " + n + " potholes by dawn; she had nothing to lose; except for her shoes; now " +
                        friend + " has " + (n - 1) + " cars on the lawn."
                    );

                    //Attach paragraph to body & paragraph to div
                    p3.appendChild(verseThree);
                    document.body.appendChild(p3);
                    div.appendChild(p3);
                }
            }
        }
    }
}