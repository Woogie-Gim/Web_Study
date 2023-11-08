import { useState, useEffect } from 'react'

function Hello() {
  function byFn() {
    console.log("bye :(")
  }
  function hiFn() {
    console.log("create :)")
    return byFn
  } 
  useEffect(hiFn, [])
  return <h1>Hello</h1>
}

function App() {
  const [showing, setShowing] = useState(false)
  const onClick = () => setShowing((prev) => !prev)
  return (
    
    <div>
      {showing ? <Hello /> : null}  
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App;
// const [counter, setValue] = useState(0)
// const [keyword, setKeyword] = useState("")
// const onClick = () => setValue((prev) => prev + 1)
// const onChange = (event) => setKeyword(event.target.value)

//   useEffect(() => {
//     console.log("I run only once.")
//   }, [])
//   // useEffect(() => {
//   //   if (keyword !== "" && keyword.length > 5)
//   //   {
//   //     console.log("SEARCH FOR", keyword)
//   //   }
//   // }, [keyword])

//   useEffect(() => {
//     console.log("I run when 'keyword' changes.")
//   }, [keyword])
//   // keyword가 변화할 때만 안에 코드가 실행된다.

//   useEffect(() => {
//     console.log("I run when 'counter' changes.")
//   }, [counter])

//   useEffect(() => {
//     console.log("I run when keyword & counter change.")
//   }, [keyword, counter])
//   return(
//     <div>
//       <input 
//       value={keyword}
//       onChange={onChange} 
//       type="text" 
//       placeholder='Search here...' 
//       />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>click me</button>
//     </div>
//   )


// 항상 state가 변경될 때 모든 코드가 재 실행 된다.