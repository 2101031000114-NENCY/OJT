function demoExternalAlert()
    {
        alert("External Alert.");
    }
function demoExternalConfirm()
    {
        if(confirm("Are You Sure..??"))
        {
            alert("Yess");
        }
        else
        {
            alert("Nooo");
        }
    }
function demoExternalPrompt()
    {
        var fName=prompt("Enter Firsname Here..");
        var lName=prompt("Enter Lastname Here..");
        alert(fName+" "+lName);
    }