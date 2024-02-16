import Button from "./components/Button"

function App() {
  const handler = () => {
    alert("Hello")
  }
  return (
    <>
      <Button onClick={handler} label="Click me" color="#111" />
    </>
  )
}

export default App
