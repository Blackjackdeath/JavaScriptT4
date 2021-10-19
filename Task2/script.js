function addTask(event) {
    let checkboxTask = document.createElement("label");
    if (document.getElementsByClassName('inputTask')[0].value == '') {
        document.getElementsByClassName('alert')[0].style.display = 'block';
        document.getElementsByClassName('alert')[0].children[2].textContent='Пусте поле не можна добавити!';
    }
    else {
        if (document.forms.formPage.length < 10) {
            checkboxTask.innerHTML = `<input type="checkbox" name="" id="check${document.forms.formPage.length}" class="pageCheckBox">` + document.getElementsByClassName('inputTask')[0].value;
            document.forms.formPage.append(checkboxTask);
            document.getElementsByClassName('inputTask')[0].value = '';
        }
    }
}
function checkClick(event) {
    let del = document.forms[0];
    if (document.forms.formPage.length == 1) {
        document.getElementsByClassName('alert')[0].style.display = 'block';
        document.getElementsByClassName('alert')[0].children[2].textContent='Останній таск зі списку Ви не можете видалити.';
        document.forms[0][0].checked=false;
    }
    else {
        for (const iterator of del) {
            if (iterator.checked) {
                iterator.parentElement.remove();
            }
        }
    }
}
function closeAletr(event) {
    document.getElementsByClassName('alert')[0].style.display = 'none';
}