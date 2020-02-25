const html = `<!DOCTYPE html>
<html>
<head>
  <title>Visitor Form</title>

  <style type="text/css">
    
/* Bordered form */
form {
  border: 3px solid #f1f1f1;
}

/* Full-width inputs */
input[type=text], input[type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: orange;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}

/* Add a hover effect for buttons */
button:hover {
  opacity: 0.8;
}

/* Extra style for the cancel button (red) */
.cancelbtn {
  width: auto;
  padding: 10px 18px;
  background-color: #f44336;
}

/* Center the avatar image inside this container */
.imgcontainer {
  text-align: center;
  margin: 24px 0 12px 0;
}

/* Avatar image */
img.avatar {
  width: 15%;
  height: 15%;
  border-radius: 50%;
}

/* Add padding to containers */
.container {
  padding: 16px;
}

/* The "Forgot password" text */
span.psw {
  float: right;
  padding-top: 16px;
}

/* Change styles for span and cancel button on extra small screens */
@media screen and (max-width: 300px) {
  span.psw {
    display: block;
    float: none;
  }
  .cancelbtn {
    width: 100%;
  }
}

  </style>
</head>
<body>

  <header>
    <h2 style="text-align: center;">Visitor Form</h2>
  </header>

</body>
</html>
 <form action="/new_visitor" method="post">
  <span class="imgcontainer">
    <!--<img src="account.png" height="40" width="40" alt="Avatar" class="avatar">-->
  </span>

  <span class="container">
    <label for="uname"><b>Visitor Name</b></label>
    <input type="text" placeholder="Visitor Name" name="visitorName" required>

    <label for="uname"><b>Assistant </b></label>
    <input type="text" placeholder="Assisted by" name="assistant" required>

    <label for="uname"><b>Visitors Age</b></label>
    <input type="age" placeholder="Visitors Age" name="visitorAge" required>

    <label for="uname"><b>Date of Visit</b></label>
    <input type="date" placeholder="Date of Visit" name="dateOfVisit" required>

    <label for="uname"><b>Time of Visit</b></label>
    <input type="time" placeholder="Time of Visit" name="timeOfVisit" required><br/>
    <br/>

    <label for="uname"><b>Comments</b></label>
    <input type="text" placeholder="Comments" name="comments" required>

    <button type="submit">Submit</button>

  </span>

  <div class="container" style="background-color:#f1f1f1">
    <button type="button" class="cancelbtn">Cancel</button>
  </div>
</form> 
</body>
</html>
`

module.exports = html;
