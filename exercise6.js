fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
      const uncompleted = json.reduce( (sum, todo) => {
        if(todo.completed == true){
            if(todo.userId in sum){
                sum[todo.userId]++
            }else{
                sum[todo.userId]=1
            }
        }
        return sum;
      }, {})
      console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });