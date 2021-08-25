import { useState } from "react"
import {
  Client,
  Footer,
  Header,
  InvoiceDetails,
  InvoiceNumber,
  Notes,
  Person,
  SendModal,
} from "./components"

export default function App() {
  const [showModal, setShowModal] = useState(false)

  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {}

  const handleSend = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      <main className="md:max-w-4xl md:mx-auto">
        <Header
          handlePrint={handlePrint}
          handleDownload={handleDownload}
          handleSend={handleSend}
        />
        {showModal && <SendModal setShowModal={setShowModal} />}
        <Person />
        <Client />
        <InvoiceNumber />
        <InvoiceDetails />
        <Notes />
        <Footer />
      </main>
    </>
  )
}
