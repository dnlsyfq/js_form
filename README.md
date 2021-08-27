# Form Validation


* confirm(str) 
Pop Up Window Ok , Cancel 
boolean

```
var check = confirm("Do you wan to continue");
if(check == true){
    document.write("User want to continue")
    window.location = "www.google.com"
} else {
    document.write("User does not want to continue")
}
```

* prompt("str " ,"place holder" )