var selectedRow = null;

function onFormSubmit(){
    event.preventDefault();
    var formData =readFormData();
    if(selectedRow === null){
         insertNewRecord(formData);
    }

    else{
        updateRecord(formData);
       

    }
       resetForm();

}

// DOM FOR ENTERING THE FORM DATA

function readFormData(){
    var formData = {};
    formData["studentname"] = document.getElementById("studentname").value;
    formData["registration"] = document.getElementById("registration").value;
    formData["domain"] = document.getElementById("domain").value;
    formData["email"] = document.getElementById("email").value;
    formData["university"] = document.getElementById("university").value;

    return formData;

}

// JAVASCRIPT DOM IMPLEMENTATION FOR MAKING RECORD OF DATA ENTERED

function insertNewRecord(data){
    var table = document.getElementById("storelist").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell1 = newRow.insertCell(0);
        cell1.innerHTML= data.studentname;
    
    var cell2 = newRow.insertCell(1);
        cell2.innerHTML= data.registration;

    var cell3 = newRow.insertCell(2);
        cell3.innerHTML= data.domain;

    var cell4 = newRow.insertCell(3);
        cell4.innerHTML= data.email;

    var cell5 = newRow.insertCell(4);
        cell5.innerHTML= data.university;

    var cell6 = newRow.insertCell(5);
        cell6.innerHTML= `<button onClick='onEdit(this)'>Edit</button> <button onClick='onDelete(this)'>Delete</button>`
}

// FOR EDITING THE FORM DATA

function onEdit(td){
    selectedRow = td.parentElement.parentElement;
    document.getElementById('studentname').value = selectedRow.cells[0].innerHTML;
    document.getElementById('registration').value = selectedRow.cells[1].innerHTML;
    document.getElementById('domain').value = selectedRow.cells[2].innerHTML;
    document.getElementById('email').value = selectedRow.cells[3].innerHTML;
    document.getElementById('university').value = selectedRow.cells[4].innerHTML;
}


// DOM FOR UPDATING THE EDITED FORM ROW

function updateRecord(formData){
    selectedRow.cells[0].innerHTML = formData.studentname;
    selectedRow.cells[1].innerHTML = formData.registration;
    selectedRow.cells[2].innerHTML = formData.domain;
    selectedRow.cells[3].innerHTML = formData.email;
    selectedRow.cells[4].innerHTML = formData.university;
    
}

// DOM FOR DELETION OF FORM DATA

function onDelete(td){
    if(confirm('Are you sure you want to delete this data?')){
        row= td.parentElement.parentElement;
        document.getElementById('storelist').deleteRow(row.rowIndex);
    }

    resetForm();

    
}

// DOM FOR ENTERING NEW RECORD TO THE FORM ELEMENTS AFTER RESET

function resetForm(){
    document.getElementById('studentname').value ='';
    document.getElementById('registration').value ='';
    document.getElementById('domain').value ='';
    document.getElementById('email').value ='';
    document.getElementById('university').value ='';

    
}

