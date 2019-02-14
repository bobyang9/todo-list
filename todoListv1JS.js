var idNumber = 1;
var allTimeMarkedDoneCount = 0;
var numItemsMade = 0;
var statusArray = [];
var defaultTextFiller = "Insert text here";


function myFunction()
{
    // Make a flexbox p with class flex2 and id sectionIdNumber
    var p = document.createElement("section");
    p.setAttribute("class", "flex2");
    p.setAttribute("id", "section"+idNumber);
    
    // Make a button b that shows the status Done or Not Done, with id statusIdNumber and class status. If clicked, b runs myFunction2 and passes its id in. It has text "Not Done" and is a child of flexbox p.
    var b = document.createElement("button");
    b.setAttribute("id", "status"+idNumber);
    b.setAttribute("class", "status")
    b.setAttribute("onclick", "myFunction2(this.id)");
    var t1 = document.createTextNode("Not Done");
    b.appendChild(t1);
    p.appendChild(b);
    //this pushes the status of the new button (default "Not Done") to the status array (responsible for toggling the two states)
    statusArray.push("Not Done");
    
    // Make a textarea txt with default text "Insert text here", and it is a child of flexbox p
    var txt = document.createElement("textarea");
    var t2 = document.createTextNode(defaultTextFiller);
    txt.appendChild(t2);
    p.appendChild(txt);
    
    // Make a button b2 with id removerIdNumber and class remover. If clicked, b2 runs myFunction3 and passes its id in. It has text "x" (the deletion button) and is a child of flexbox p.
    var b2 = document.createElement("button");
    b2.setAttribute("id", "remover"+idNumber);
    b2.setAttribute("class", "remover");
    b2.setAttribute("onclick", "myFunction3(this.id)");
    var t3 = document.createTextNode("x");
    b2.appendChild(t3);
    p.appendChild(b2);
    //increment id number so each p has a different id number
    idNumber = idNumber + 1;
    document.getElementById("hi").appendChild(p);
    
    //Increase "num items made"
    numItemsMade = numItemsMade + 1;
    document.getElementById("num_items_made_span").innerHTML = numItemsMade;
}

function myFunction2(clicked_id)
{
    //Get the id of the button that triggered it, and turn it green
    if(statusArray[clicked_id.match(/\d+/)[0]-1] == "Not Done")
    {
        document.getElementById(clicked_id).style.backgroundColor = "#d6ffd6";
        document.getElementById(clicked_id).innerHTML = "Done";
        statusArray[clicked_id.match(/\d+/)[0]-1] = "Done";
        allTimeMarkedDoneCount++;
        document.getElementById("num_items_done_span").innerHTML = allTimeMarkedDoneCount;
    }
    else
    {
        document.getElementById(clicked_id).style.backgroundColor = "#ffd6d6";
        document.getElementById(clicked_id).innerHTML = "Not Done";
        statusArray[clicked_id.match(/\d+/)[0]-1] = "Not Done";
    }
        
    
}

function myFunction3(clicked_id)
{
    var parent = document.getElementById("hi");
    var child = document.getElementById(clicked_id).parentNode;
    parent.removeChild(child);
}

function checkboxFunction()
{
    var checkbox1 = document.getElementById("checkbox1");
    if(checkbox1.checked === true)
    {
        defaultTextFiller = "";
    }
    else
    {
        defaultTextFiller = "Insert text here";
    }
}





