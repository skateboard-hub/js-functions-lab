fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
    const sum = json.reduce( (sum, todo) => {
        if (todo.completed == false){
            sum = sum + 1
        }
        return sum;
    }, 0)
   console.log(sum);
  })
  .catch(function(err) { 
    console.log(err);
  });