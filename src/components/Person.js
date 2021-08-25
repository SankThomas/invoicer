import { useState } from "react"

export default function Person() {
  const [name, setName] = useState("Your name")
  const [address, setAddress] = useState("Your address")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <article className="flex flex-col items-end justify-end px-5 lg:px-0 text-center">
        <form
          className="flex flex-col items-end justify-end"
          onSubmit={handleSubmit}
        >
          <label htmlFor="name" className="font-bold">
            Your name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="What is your name?"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label htmlFor="address" className="font-bold">
            Where do you stay?
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="Optional: where do you stay?"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </form>
        <h1 className="uppercase font-bold text-4xl mt-10">{name}</h1>
        <p>{address}</p>
      </article>
    </>
  )
}
