import { useRef } from "react"

export default function UseRef() {
  const inputRef = useRef(null)

  const focusInput = () => {
    inputRef?.current?.focus()
  }

  return (
    <>
      <div>DOM Access (Imperative Escape Hatch)</div>
      <div>Persist Mutable Values Without Re-render</div>
      <div>If UI depends on the value: dont use useRef, use useState</div>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  )
}
