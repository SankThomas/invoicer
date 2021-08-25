import { useState } from "react"

export default function InvoiceNumber() {
  const [invoiceNumber, setInvoiceNumber] = useState("")
  const [invoiceDate, setInvoiceDate] = useState("")
  const [dueDate, setDueDate] = useState("")

  return (
    <>
      <article className="flex flex-col items-end px-5 justify-between lg:px-0 mt-10">
        <p className="font-bold">
          Invoice number:{" "}
          <input
            type="text"
            value={invoiceNumber}
            onChange={(e) => setInvoiceNumber(e.target.value)}
          />{" "}
          <span className="font-light">{invoiceNumber}</span>
        </p>
        <p className="font-bold">
          Invoice date:{" "}
          <input
            type="date"
            name="date"
            id="date"
            required
            value={invoiceDate}
            onChange={(e) => setInvoiceDate(e.target.value)}
          />
          <span className="font-light">{invoiceDate}</span>
        </p>
        <p className="font-bold">
          Due date:{" "}
          <input
            type="date"
            name="date"
            id="date"
            required
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />{" "}
          <span className="font-light">{dueDate}</span>
        </p>
      </article>
    </>
  )
}
