## Pluralsight Read + Flux 

# Lifecycles in React
componentWillMount
	Before initial render, both client and server
	Good spot for setting initial state
componentDidMount
	After render
	Access DOM, integrate with frameworks, set timers, AJAX requests
componentWillReceiveProps
	When receiving new props. Not called on initial render
	Set state before a render
shouldComponentUpdate
	Before render when new props or state are being received. Not called on initial render.
	Performance. Return false to void unnecessary re-renders.
componentWillUpdate
	Immediately before rendering when new props or state are being received. Not called on initial render.
	Prepare for an update.
componentDidUpdate
	After component's updates are flushed to the DOM. Not called for the initial render.
	Work with the DOM after an update.
componentWillUnmount
	Immediately before component is removed from the DOM.
	Cleanup.

//
key={} // add a key to dynamic childs

