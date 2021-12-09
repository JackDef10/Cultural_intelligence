function contactUs() {
    console.log("Contact us is fired");
    var elements = document.getElementById("myForm").elements;
    var obj = {};
    for (var i = 0; i < elements.length; i++) {
      var item = elements.item(i);
       // obj[item.name] = item.value;
      if (item.name != "") {
        obj[item.name] = item.value;
      }
    }
    console.log("Obj", obj);
    var xhr = new XMLHttpRequest();
    var url =
      "http://ec2-3-8-99-136.eu-west-2.compute.amazonaws.com:5000/api/v1/culturaly/contactus";
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var json = JSON.parse(xhr.responseText);
        console.log(json);
      }
    };
    xhr.send(JSON.stringify(obj));
  }