function getName() {
    var name = document.getElementsByName('firstname')[0].value;
    document.getElementById('output').innerHTML = "Hello, " + name + "!";
}


function getDate() {
    document.getElementById("date").innerHTML = "Today's Date is " + moment().format("MMM Do YYYY");;
}