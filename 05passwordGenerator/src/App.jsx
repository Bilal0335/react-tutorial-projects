import React, { useCallback, useEffect, useRef, useState } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState('')
  const [copied, setCopied] = useState(false) // ✅ copy message ke liye state

  // ! useref
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (numberAllowed) chars += '0123456789'
    if (charAllowed) chars += '!@#$%^&*()_+~`|}{[]:;?><,./-='

    let generatedPassword = ''
    for (let i = 1; i <= length; i++) {
      let pass = Math.floor(Math.random() * chars.length)
      generatedPassword += chars.charAt(pass)
    }

    setPassword(generatedPassword)
    setCopied(false) // ✅ naya password generate hone par message reset
  }, [length, numberAllowed, charAllowed])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // ✅ Updated Copy Function
  const copyPasswordToClipBoard = useCallback(() => {
    window.navigator.clipboard.writeText(password)
    if (passwordRef.current) {
      passwordRef.current.select()
      passwordRef.current.setSelectionRange(0, password.length)
    }
    setCopied(true) // ✅ success message show
  }, [password])

  return (
    <>
      <div className='w-full max-w-md bg-gray-700 text-orange-600 mx-auto px-4 py-8 rounded-lg shadow-lg mt-9'>
        <h1 className='text-center text-4xl font-bold mb-5 my-3'>Password Generator</h1>

        <div className='flex overflow-hidden shadow mb-4 rounded-lg'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Enter a Password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='bg-blue-600 px-4 outline-none py-0.5 text-white shrink-0 font-medium'
            onClick={copyPasswordToClipBoard}
          >
            Copy
          </button>
        </div>

        {/* ✅ Success message */}
        {copied && (
          <p className='text-green-400 text-sm mb-3'>Password copied to clipboard ✅</p>
        )}

        <div className='gap-x-3 flex text-sm'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              value={length}
              min={6}
              max={100}
              className='cursor-pointer'
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              className='border-none outline-none'
              checked={numberAllowed}
              id='numberInput'
              onChange={() => setNumberAllowed((prev) => !prev)}
            />
            <label htmlFor="numberInput">Number</label>
          </div>
          <div className='flex items-center gap-x-2'>
            <input
              type="checkbox"
              className='border-none outline-none'
              checked={charAllowed}
              id='charInput'
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App



// ! Todo App
// import React, { useState, useRef, useEffect } from "react";

// function App() {
//   const [todos, setTodos] = useState([]);
//   const [input, setInput] = useState("");
//   const [editId, setEditId] = useState(null);
//   const inputRef = useRef(null);

//   // Focus input on render
//   useEffect(() => {
//     inputRef.current.focus();
//   }, []);

//   // Add or Edit Todo
//   const handleSubmit = () => {
//     if (input.trim() === "") return;

//     if (editId !== null) {
//       setTodos(prev =>
//         prev.map(todo =>
//           todo.id === editId ? { ...todo, text: input } : todo
//         )
//       );
//       setEditId(null);
//     } else {
//       setTodos(prev => [
//         ...prev,
//         { id: Date.now(), text: input, completed: false },
//       ]);
//     }
//     setInput("");
//   };

//   // Delete Todo
//   const handleDelete = id => {
//     setTodos(prev => prev.filter(todo => todo.id !== id));
//   };

//   // Toggle Complete
//   const toggleComplete = id => {
//     setTodos(prev =>
//       prev.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   // Edit Todo
//   const handleEdit = todo => {
//     setInput(todo.text);
//     setEditId(todo.id);
//     inputRef.current.focus();
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center p-5">
//       <h1 className="text-3xl font-bold mb-5">React Todo App</h1>

//       {/* Input + Add/Edit */}
//       <div className="flex mb-5 w-full max-w-md">
//         <input
//           ref={inputRef}
//           className="flex-1 border border-gray-300 rounded-l px-3 py-2 focus:outline-none"
//           placeholder="Add todo..."
//           value={input}
//           onChange={e => setInput(e.target.value)}
//           onKeyDown={e => e.key === "Enter" && handleSubmit()}
//         />
//         <button
//           className="bg-blue-500 text-white px-4 rounded-r hover:bg-blue-600"
//           onClick={handleSubmit}
//         >
//           {editId !== null ? "Update" : "Add"}
//         </button>
//       </div>

//       {/* Todo List */}
//       <ul className="w-full max-w-md">
//         {todos.map(todo => (
//           <li
//             key={todo.id}
//             className={`flex justify-between items-center bg-white p-3 mb-2 rounded shadow ${
//               todo.completed ? "line-through text-gray-400" : ""
//             }`}
//           >
//             <span onClick={() => toggleComplete(todo.id)} className="cursor-pointer">
//               {todo.text}
//             </span>
//             <div className="flex space-x-2">
//               <button
//                 className="bg-yellow-400 text-white px-2 py-1 rounded hover:bg-yellow-500"
//                 onClick={() => handleEdit(todo)}
//               >
//                 Edit
//               </button>
//               <button
//                 className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
//                 onClick={() => handleDelete(todo.id)}
//               >
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;






// ! timer hook

// import React, { useState, useRef, useEffect, useCallback } from "react";

// // Child Button Component
// const ChildButton = React.memo(({ onClick }) => {
//   console.log("Child rendered"); // Only renders if function changes
//   return (
//     <button
//       className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
//       onClick={onClick}
//     >
//       Child Alert
//     </button>
//   );
// });

// function App() {
//   // ---------------- useState ----------------
//   const [seconds, setSeconds] = useState(0);
//   const [clickCount, setClickCount] = useState(0);

//   // ---------------- useRef ----------------
//   const inputRef = useRef(null);

//   // ---------------- useEffect ----------------
//   useEffect(() => {
//     const timer = setInterval(() => setSeconds(prev => prev + 1), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   // ---------------- useCallback ----------------
//   const handleChildClick = useCallback(() => {
//     alert("Child button clicked!");
//   }, []);

//   // Focus input function
//   const focusInput = () => inputRef.current.focus();

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
//       <h1 className="text-3xl font-bold mb-6">React Hooks + Tailwind Demo</h1>

//       {/* Timer */}
//       <div className="bg-white p-5 rounded shadow-md w-80 text-center mb-5">
//         <h2 className="text-xl font-semibold mb-2">Timer</h2>
//         <p className="text-2xl">{seconds} seconds</p>
//       </div>

//       {/* Click Counter */}
//       <div className="bg-white p-5 rounded shadow-md w-80 text-center mb-5">
//         <h2 className="text-xl font-semibold mb-2">Button Click Count</h2>
//         <p className="text-2xl mb-2">{clickCount}</p>
//         <button
//           className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
//           onClick={() => setClickCount(clickCount + 1)}
//         >
//           Increment Click
//         </button>
//       </div>

//       {/* Input Focus */}
//       <div className="bg-white p-5 rounded shadow-md w-80 text-center mb-5">
//         <h2 className="text-xl font-semibold mb-2">Focus Input</h2>
//         <input
//           ref={inputRef}
//           className="border border-gray-300 rounded px-2 py-1 w-full mb-2"
//           placeholder="Type here..."
//         />
//         <button
//           className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600"
//           onClick={focusInput}
//         >
//           Focus Input
//         </button>
//       </div>

//       {/* Child Button */}
//       <div className="bg-white p-5 rounded shadow-md w-80 text-center">
//         <h2 className="text-xl font-semibold mb-2">Child Button</h2>
//         <ChildButton onClick={handleChildClick} />
//       </div>
//     </div>
//   );
// }

// export default App;
