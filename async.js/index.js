

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Forms</title>
</head>
<body>
    <h2>This is HTML forms tutorial</h2>
    <form action="backened.php">
        <label for="name">name</label>
        <div>
        <input type="text" name="my Name" id="name">
       </div>
       <br>
       <div>
       Role: <input type="text" name="my Role">
       </div>
       <br>
       <div>
        Email: <input type="email" name="my Email">
       </div>
       <br>
       <br>
       <div>
           Date:  <input type="date" name="my date" >
           </div>
           <br>
           Bonus: <input type="Number" name="my Bonus" >
           <br>
           <div>
               Are you eligible: <input type="checkbox" name="my eligibility">
      </div>
      <br>
      <div>
          Gender:Male <input type="radio" name="my Gender"> Female <input type="radio" name="my Gender"> other <input type="radio" name="my Gender">
          </div>
          <br>
          <div>
           write about yourself: <br><textarea name="my text"  cols="30" rows="30"></textarea>
          </div>
          <br>
          <div>
            <label for="car">car</label>
            <select name="mycar" id="car">
                <option value="fortuner">fortuner</option>
                <option value="rolls royce" selected>rolls royce</option>
            </select>
          </div>
          <br>
            <div>
             <input type="submit" value="submit Now">
             <input type="reset" value="reset Now">
            </div>
    </form>
</body>
</html>