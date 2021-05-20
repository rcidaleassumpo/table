- Aggregation of the data would be done in whatever is the module responsible to get the Data. There should have a method where 
you would call it which would probably return a Promise.all of whatever is the aggragated that you need. 
- I would suggest for any state that requires fetching, to use react-query. It has a lot of useful features like error retry
auto chaching, and others.
- The Table component should be extracted to it's own place, where the logic on how to handle the internals of a table should be hidden of the caller of `Table`
- You could create a model that creates a shape todo from the API call, something like Todo.toTable(), and that would return the 
  shape necessary to render the `Table` { headers: [], dataRow: [string[]] }
- I would suggest to go with react-table if you want to build more advanced tables, is a solid library and you wouldn't be reinventing the wheel.

The main idea is to "never" have logic inside of a component that is from a domain object, like Todo, Post, Contract, whatever is that you are working on. 

useEffect, normally used when you need to so a `side Effect` like api calls, otherwise I would use useMemo(to be used when you need to compute a value based on something else.)

So instead of this:

const [a, setA] = useState()

useEffect(() => {

  setA(newValue)
}, [dependency])

Do this:

const a = useMemo(() => newValue, [dependency])

The example is very simplistic, but the idea hopefully is understandable

useLayoutEffect:


React Context was created to solve the prop drilling(passing props down the tree)  (in a APP where you have A/B/C)
in order for A to pass value to C, then you need to pass the prop from A, to B, to then C, which is not ideal, so instead,
we can solve by first creating a context,

context = React.createContext(), pass optional initial value

Than have a wrapper <Contenxt.Provider value={}>

Then, down the tree, you would access the value with 

useContext(context) (the one you just created...)



// USE LAYOUT EFFECT 

The signature is identical to useEffect, but it fires synchronously after all DOM mutations. Use this to read layout from the DOM and synchronously re-render. Updates scheduled inside useLayoutEffect will be flushed synchronously, before the browser has a chance to paint.

Prefer the standard useEffect when possible to avoid blocking visual updates.

I never used this one. And I don't really see that being the case in any Application, that is probably something that a library would use.



useRef
// normally used to get a hold of form inputs 
// or make things immutables , to avoid rerenders

useCallback
I don't normally use it, and I'm feel like if you build you application in a modular way, and keep function returning value, 
which means that you can keep the function outside of the scope of the Component, then you wouldn't need to use useCallback,


React Portal, 
I have use the Vue Portals, and it seemed pretty straightforward, but the main idea is to handle the problem that arises with Modal
layouts, so I would imagine that React Portal is the same thing.
