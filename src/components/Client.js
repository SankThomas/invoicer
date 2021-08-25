import { useState } from "react"

export default function Client() {
  const [clientName, setClientName] = useState("Client's name")
  const [clientAddress, setClientAddress] = useState("Client's address")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <article className="flex flex-col items-start justify-between px-5 lg:px-0 text-center mt-10">
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="clientName" className="font-bold">
            Client's name
          </label>
          <input
            type="text"
            name="clientName"
            id="clientName"
            placeholder="Client's name"
            required
            value={clientName}
            onChange={(e) => setClientName(e.target.value)}
          />
          <label htmlFor="clientAddress" className="font-bold">
            Client's Address
          </label>
          <input
            type="text"
            name="clientAddress"
            id="clientAddress"
            placeholder="Client's address"
            value={clientAddress}
            onChange={(e) => setClientAddress(e.target.value)}
          />
        </form>

        <h3 className="uppercase font-bold text-2xl">{clientName}</h3>
        <p>{clientAddress}</p>
      </article>
    </>
  )
}
