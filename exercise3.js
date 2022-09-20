fetch("https://jsonplaceholder.typicode.com/todos")
  .then(response => response.json())
  .then(json => {
     const uncompletedIn = json.filter((todo) => {
        if ( todo.completed == false ){
            return todo;
        }    
     });
     const uncompleted = uncompletedIn.map( todo => {
        return {
          userId: todo.userId,
          title: todo.title,
        };
      });
      console.log(uncompleted);
  })
  .catch(function(err) { 
    console.log(err);
  });