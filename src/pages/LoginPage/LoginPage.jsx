import { useState } from "react";


export default function LoginPage({ setUser }) {
    const [input, setInput] = useState('')

    return (
      <div>
        <h1 className='text-4xl m-8'>LoginPage</h1>
        <form onSubmit={() => setUser(input)}>
            <label className="text-white m-4" htmlFor="name">Username</label>
            <input type="text" name="name" onChange={(evt) => setInput(evt.target.value)} />
        </form>
      </div>
    );
  }