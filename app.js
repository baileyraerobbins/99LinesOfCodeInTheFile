document.addEventListener("DOMContentLoaded", singButton);
function singButton() {

    //Sing song lyrics with button click
    let btn = document.querySelector("button")
    btn.addEventListener("click", buttonClick);

    function buttonClick() {

        //Create div
        let div = document.createElement("div");
        div.className = "friend";

        //Add array of friends
        let friends = [
            "Rachel",
            "Bridget",
            "Maureen",
            "Dom",
            "Carlin"
        ];

        //Loop song lyrics for each friend
        for (let i = 0; i < friends.length; i++) {
            let friend = friends[i]
            for (let n = 99; n >= 1; n--) {
                
                // Rachel drove over 1 pothole by dawn; she thought she had nothing to lose; except for her shoes; but now Rachel has no more cars on the lawn.
                if (n === 1) {
                    let p1 = document.createElement("p");
                    let verseOne = document.createTextNode(
                        friend + " drove over " + n + " pothole by dawn; she had nothing to lose; except for her shoes; now " +
                        friend + " has no more cars on the lawn."
                    );
                    
                    //Attach paragraph to body
                    p1.appendChild(verseOne);
                    document.body.appendChild(p1);
                    
                // Rachel drove over 2 potholes by dawn; she thought she had nothing to lose; except for her shoes; now Rachel has 1 car on the lawn. 
                } else if (n === 2) {
                    let p2 = document.createElement("p");
                    let verseTwo = document.createTextNode(
                        friend + " drove over " + n + " potholes by dawn; she had nothing to lose; except for her shoes; now " +
                        friend + " has " + (n - 1) + " car on the lawn."
                    );
                    
                    //Attach paragraph to body
                    p2.appendChild(verseTwo);
                    document.body.appendChild(p2);

                // Rachel drove over 100 potholes by dawn; she thought she had nothing to lose; except for her shoes; now Rachel has 99 cars on the lawn.
                } else {
                    let p3 = document.createElement("p");
                    let verseThree = document.createTextNode(
                        friend + " drove over " + n + " potholes by dawn; she had nothing to lose; except for her shoes; now " +
                        friend + " has " + (n - 1) + " cars on the lawn."
                    );

                    //Attach paragraph to body
                    p3.appendChild(verseThree);
                    document.body.appendChild(p3);

                }
            }
        }
    }
}