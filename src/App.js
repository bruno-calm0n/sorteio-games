import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NameSelector from './GameSelector/NameSelector'
import History from './HistorySort/History'

export default function App() {
  const [historyList, setHistoryList] = useState([])

  function addToHistory(item) {
    setHistoryList([item, ...historyList])
  }

  return (
    <Routes>
      <Route
        path="/"
        element={<NameSelector onAddHistory={addToHistory} />}
      />
      <Route
        path="/history"
        element={<History historyList={historyList} />}
      />
    </Routes>
  )
}
