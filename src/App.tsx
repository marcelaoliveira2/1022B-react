import './App.css'
function App() {
  let nome = "Marcela"
  let sobrenome = "Santos de Oliveira"
  return (
    <div>
     <h1 className="nome"> Nome: {nome}</h1>
     <p className="sobrenome"> {sobrenome}</p>
    </div>
  )// Retorna JSX - JavaScript XML
}
export default App
