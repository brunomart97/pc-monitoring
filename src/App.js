import { useSiContext } from './hooks/useSiContext'
import { InfoCard } from './components/InfoCard'
import './App.css'

function App() {
  const { gpuName, gpuTemp } = useSiContext()

  return (
    <div className="App">
      <InfoCard title={gpuName} value={gpuTemp} />
    </div>
  )
}

export default App
