var key = "";
Show()

function Save(){
    var name = document.getElementById("Name").value
    var phone = document.getElementById("Phone").value
    var city = document.getElementById("City").value
    var object = {
        "Name":name,
        "Phone":phone,
        "City":city
    }
    var array = JSON.parse(localStorage.getItem("data"))
    if(array == null){
        array=[]
    }
    array.push(object)
    localStorage.setItem("data",JSON.stringify(array))
    Clear()
    Show()
}

function Show(){
    var data = JSON.parse(localStorage.getItem("data"))
    document.getElementById("tbody").innerHTML=""
    for(var i = 0; i < data.length; i = i + 1){
        var obj = data[i]
        // console.log(obj.Name,obj.Phone,obj.City);
        var row = document.createElement("tr")
        var cell = document.createElement("td")
        var cell1 = document.createElement("td")
        var cell2 = document.createElement("td")
        var cell3 = document.createElement("td")
        var cell4 = document.createElement("td")
        cell.innerHTML = i + 1
        cell1.innerHTML = obj.Name
        cell2.innerHTML = obj.Phone
        cell3.innerHTML = obj.City
        var delbtn = document.createElement("button")
        delbtn.innerHTML="Delete"
        delbtn.id = i
        delbtn.className="btn btn-danger"
        delbtn.setAttribute("onclick","Del(this)")
        cell4.append(delbtn)
        var editbtn = document.createElement("button")
        editbtn.innerHTML="Edit"
        editbtn.id = i
        editbtn.className="btn btn-success ms-2"
        editbtn.setAttribute("onclick","Edit(this)")
        cell4.append(editbtn)
        row.append(cell)
        row.append(cell1)
        row.append(cell2)
        row.append(cell3)
        row.append(cell4)
        document.getElementById("tbody").append(row)
    }
}

function Clear(){
    document.getElementById("Name").value = ""
    document.getElementById("Phone").value = ""
    document.getElementById("City").value = ""
}

function Del(button){
    var id = button.id
    var array = JSON.parse(localStorage.getItem("data"))
    array.splice(id,1)
    localStorage.setItem("data",JSON.stringify(array))
    Show()
}

function Edit(button){
    var id = button.id
    key = id
    var array = JSON.parse(localStorage.getItem("data"))
    var obj = array[id]
    // console.log(obj.Name,obj.Phone,obj.City);
    document.getElementById("Name").value = obj.Name
    document.getElementById("Phone").value = obj.Phone
    document.getElementById("City").value = obj.City
}

function Update(){
    var name = document.getElementById("Name").value
    var phone = document.getElementById("Phone").value
    var city = document.getElementById("City").value
    var object = {
        "Name":name,
        "Phone":phone,
        "City":city
    }
    var array = JSON.parse(localStorage.getItem("data"))
    array.splice(key,1,object)
    localStorage.setItem("data",JSON.stringify(array))
    Show()
    Clear()
}

