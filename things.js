function addGratitude() {
    const input = document.getElementById("gratitudeInput");
    const gratitudeText = input.value;
    
    console.log("Input value:", gratitudeText); // keep a input value

    if (gratitudeText.trim() !== "") {
        const li = document.createElement("li");
        
        console.log("Creating new list item for:", gratitudeText); // log it creation

        // make  span for  bullet point text
        const textSpan = document.createElement("span");
        textSpan.textContent = gratitudeText;
        
        console.log("Text span created with content:", textSpan.textContent); 

        //  the delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
            console.log("Deleting item:", textSpan.textContent); //  the deletion action
            li.remove();
        };

        console.log("Delete button created for item:", gratitudeText); // make it know delete button creation

        //  tracktext and delete button to the list item
        li.appendChild(textSpan);
        li.appendChild(deleteButton);

        //   list item to the thankful list
        const list = document.getElementById("gratitudeList");
        list.appendChild(li);
        
        console.log("Added to gratitude list:", gratitudeText); //  log new to the list

        // clear the input  for the next input
        input.value = "";
        console.log("Input cleared"); // log   clearing
    } else {
        console.log("Empty input detected, prompting user"); // log   empty input possiblty 
        
    }
}
