* The general flow of steps will be to create your store, create your reducers, create your containers, and then create the action creators.
* When you add a new item to the todo array an action containing the new todo object will be dispatched through all of the reducers.
* To display the todo list you will create a container that receives the `todos` array as a prop and then uses `map` to display it as an unordered list.
### State Tree
* Your application should have an input field, a submit button, and a list of items that represents your todo list.
* Your application's state tree should have a single property called `todos`. It should take the same form as the object shown below.
```
{
 todos: []
}
```

* Each `todo` item that is in the `todos` array should have the following format:
```
{
  value: 'Walk the dog.',
  completed: false
}
```

* You will create your store in `src/index.js`. The `<Provider >` component will wrap `<App />` and you will pass the created store into `<Provider >` as one of its properties. Use [this](https://github.com/SunJieMing/redux-example-movies) repository as a reference.
