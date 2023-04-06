
//regex for date
function checkData(value)
{
    if(/^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/.test(document.getElementById('date').value)) return true;
    else return false;
}
var i = 1;
function addElem()
{
    const list = document.getElementById('list');
    const elem = document.createElement('li');
    var input = document.getElementById('do').value;
    var data = document.getElementById('date').value;

 //checking if input is correct

    if(input != "" && checkData(data)){
    
    //make a new element in list
    list.appendChild(elem).textContent = input + '   '+ data;

    list.appendChild(elem).id = 'new' + i;

    // making a function button with options to change list

    const deleteElem = document.createElement('button');

    elem.appendChild(deleteElem);
    elem.appendChild(deleteElem).id = 'delete' + i;

    

    document.getElementById('date').value = "";
    document.getElementById('do').value = "";
    i++;
    }
}

//if user click enter do a click button "add"
addEventListener("keypress", function(event){
    if(event.key == "Enter")
    {
        event.preventDefault();
        this.document.getElementById("add").click();
    }
});
var j = 0;
function removeElem(){
    var rm = document.getElementById()
}