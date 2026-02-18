import { useEffect, useState } from "react"

const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState('useEffect');


  useEffect(() => {
    console.log('runs on first load: []');
  }, [])

  useEffect(() => {
    console.log('runs based on dependency: [title]');
  }, [title])

  useEffect(() => {
    console.log('runs every time: no dependency');
  })

  const updateTitle = () => {
    setTitle('Earth');
  }

  const increaseCount = () => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center">
          <button className="bg-blue-500 border-none px-4 py-2 rounded" onClick={updateTitle}>Click to update title</button>
          <div className="ml-6 text-lg font-medium">Hello, {title}!</div>
        </div>

        <div className="mt-10 text-xs font-light">Open console to view the useEffect trigger results</div>

        <div className="flex flex-col items-center justify-center mt-10">
          <div className="text-sm font-normal">Count: {count}</div>
          <button className="bg-green-500 border-none px-4 py-2 rounded" onClick={increaseCount}>Increase</button>
        </div>
      </div>
    </>
  )
}

export default UseEffect;
