import { useState, useEffect } from 'react'
import logo from '/pwa-512x512.png'

function App() {
  // get maximum random number from user

  const [maxRandomNumber, setMaxRandomNumber] = useState(6)
  const [randomNumber, setRandomNumber] = useState(0)
  const generateRandomNumber = () => {
    setRandomNumber(1 + Math.floor(Math.random() * maxRandomNumber))
  }

  const [timeInterval, setTimeInterval] = useState(2000)
  const [timer, setTimer] = useState(false)
  const [progress, setProgress] = useState(0)

  const progressSteps = 20
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (timer) {
        setProgress(progress + 1)
        if (progress >= progressSteps) {
          generateRandomNumber()
          setProgress(0)
        }
      }
    }, timeInterval / progressSteps)
    return () => clearInterval(intervalId)
  })

  return (
    <>
      <div className="h-screen flex items-center justify-center">
        <div className="w-80">
          <div className="text-center text-2xl font-bold p-8">Timed Random Number Generator</div>
          <img src={logo} className="content-center" alt="Time logo" />
          <div className="text-center text-2xl p-6 text-gray-300">Random Number </div>
          <div className="text-center text-6xl border-4 p-6 rounded">{randomNumber}</div>
          <label className="block p-1">
            <span> Number of Outcomes </span>
            <input className="border-2 border-gray-600 rounded-md bg-gray-700 h-6 w-20"
              type="number"
              value={maxRandomNumber}
              onChange={(e) => setMaxRandomNumber(parseInt(e.target.value))}
            />
          </label>
          <label className='block p-1'>
            <span> Time Interval (ms) </span>
            <input className="border-2 border-gray-600 rounded-md bg-gray-700 h-6 w-20"
              type="number"
              value={timeInterval}
              step="100"
              onChange={(e) => setTimeInterval(parseInt(e.target.value))}
            />
          </label>
          <button className='w-full border-gray-400 rounded border-2 p-2 bg-gray-700 hover:bg-gray-800' onClick={generateRandomNumber}>Generate Random Number</button>
          <button className='w-full border-gray-400 rounded border-2 p-2 bg-gray-700 hover:bg-gray-800' onClick={() => setTimer(!timer)}>
            {timer ? 'Stop Timer' : 'Start Timer'}
          </button>
          <div className="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500" style={{flex: progress / progressSteps}}></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
