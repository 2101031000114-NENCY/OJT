<html>
    <head>
        <script type="text/javascript">
            function demoExternalAlert(){
                alert("External Alert");
            }
            function demoExternalConfirm(){
                if(confirm("Are you sure...")){
                    alert("YEss");
                }
                else{
                    alert("NOOO");
                }
            }
            function demoExternalPromrt(){
                var fName=prompt("Enter Firstname Here....");
                var lName=prompt("Enter Lastname Here....");
                alert(fName+" "+lName);
            }
        </script>
    </head>
</html>