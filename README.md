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

---

# HTML

```
<form>

</form>
```

```
    <form>
      <input type="text">
      <input type="radio">
      <input type="checkbox">
    </form> 
```

```
    <form>
       <input type="text"><br>
       <input type="radio"><br>
       <input type="checkbox"><br>
    </form> 
```

```
    <form>
      <label>email: </label>
      <input type="">
    </form>

```

The id attribute is used to identify a unique input element. The for attribute in a label targets (and matches!) an input’s id. 
```
<input type="radio" id="r1">
<label for="r1">Text</label>
```


```
<p>Notification preferences:</p>
<form>
  <input type="checkbox" id="box1"> 
  <label for="box1">
  Email</label>
  <input type="checkbox" id="box2"> 
  <label for="box2">
  Push</label>
</form>
```

```
    <form>
      <input type="checkbox" id="c1">
      <label for="c1">Art</label><br>
      <input type="checkbox" id="c2">
      <label for="c2">Sports</label><br>
      <input type="checkbox" id="c3">
      <label for="c3">Tech</label>
    </form>  
```

