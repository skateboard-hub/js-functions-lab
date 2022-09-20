fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const completed = json.filter((todo) => {
        if ( todo.completed == true ){
            console.log(`${todo.title} - ${todo.completed}`)
        }    
     });
     console.log(completed)
  })
  .catch(function(err) { 
    console.log(err);
  });