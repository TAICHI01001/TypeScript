import { useState } from "react"
interface State {
    Count: number
}
export default function State() {
    const [Count, setCount] = useState<State>({ Count: 0 })
    return (
        <div>
            <button onClick={() => setCount({ Count: Count.Count + 1 })}>Increment</button>
            <p>{Count.Count}</p>
            <button onClick={() => setCount({ Count: Count.Count - 1 })}>Decrement</button>
        </div>
    )
}
