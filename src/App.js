import { useState } from "react"
import { FaPrint, FaDownload } from "react-icons/fa"
import { IoIosSend } from "react-icons/io"

export default function App() {
  const handlePrint = () => {
    window.print()
  }

  const handleDownload = () => {}

  const handleSend = () => {}

  return (
    <>
      <main className="md:max-w-4xl md:mx-auto">
        {/* Extract into Header component */}
        <header className="p-5 lg:px-0">
          <div className="flex flex-col items-center justify-between sm:flex-row">
            <h2 className="mb-3 sm:mb-0 text-4xl">Invoicer</h2>

            <ul className="flex items-center">
              <li className="mx-1">
                <button
                  className="flex items-center bg-gray-300 text-gray-800 py-1 px-4 rounded shadow hover:bg-gray-400 transition-all duration-300"
                  onClick={handlePrint}
                >
                  Print <FaPrint className="ml-2" />
                </button>
              </li>
              <li className="mx-1">
                <button
                  className="flex items-center bg-green-500 text-gray-100 py-1 px-4 rounded shadow hover:bg-green-600 transition-all duration-300"
                  onClick={handleDownload}
                >
                  Download <FaDownload className="ml-2" />
                </button>
              </li>
              <li className="mx-1">
                <button
                  className="flex items-center bg-blue-500 text-gray-100 py-1 px-4 rounded shadow hover:bg-blue-600 transition-all duration-300"
                  onClick={handleSend}
                >
                  Send <IoIosSend className="ml-2" />
                </button>
              </li>
            </ul>
          </div>
        </header>
        {/* End of Header component */}

        {/* Extract into Person component */}
        <article className="flex flex-col items-end justify-end px-5 lg:px-0 text-center">
          <h1 className="uppercase font-bold text-4xl mt-10">
            Enter your name
          </h1>
          <p>Enter your address</p>
          {/* Physical address */}
        </article>
        {/* End of Person component */}

        {/* Extract into Client component */}
        <article className="flex flex-col items-start justify-between px-5 lg:px-0 text-center mt-10">
          <h3 className="uppercase font-bold text-2xl">Enter client's name</h3>
          <p>Enter client's address</p>
        </article>
        {/* End of Client component */}

        {/* Extract into InvoiceNumber component */}
        <article className="flex flex-col items-end px-5 justify-between lg:px-0 mt-10">
          <h4>Invoice</h4>
          <p className="font-bold">
            Invoice number: <span className="font-light">1003</span>
          </p>
          <p className="font-bold">
            Invoice date: <span className="font-light">August 24th, 2021</span>
          </p>
          <p className="font-bold">
            Due date: <span className="font-light">September 4th, 2021</span>
          </p>
        </article>
        {/* End of InvoiceNumber component */}

        {/* Extract into InvoiceDetails component */}
        <section className="mt-10 px-5 lg:px-0">
          <table style={{ width: "100%" }}>
            <tr className="text-left bg-gray-200 p-2 rounded shadow">
              <th style={{ width: "50%" }}>Item Description</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
            <tr>
              <td>Jack</td>
              <td>3</td>
              <td>600</td>
              <td>1800</td>
            </tr>
            <tr>
              <td>Eve</td>
              <td>4</td>
              <td>80</td>
              <td>320</td>
            </tr>
          </table>

          <article className="flex items-end justify-end px-5 mt-10">
            <h3 className="font-bold flex items-center">
              Total: <span className="text-4xl ml-5">Kshs. 2120</span>
            </h3>
          </article>
        </section>
        {/* End of InvoiceDetails component */}

        {/* Extract into Notes component */}
        <article className="px-5 lg:px-0 mt-10">
          <h3 className="font-bold text-2xl">Notes:</h3>
          <p>Optional: Include information such as payment and bank details</p>
          <textarea
            name="notes"
            id="notes"
            cols="39"
            rows="5"
            className="shadow bg-gray-200 focus:bg-white rounded"
          ></textarea>
        </article>
        {/* End of Notes component */}

        {/* Extract into Footer component */}
        <footer className="px-5 mt-10 lg:px-0 border-t border-gray-300 pt-5 pb-10">
          <ul className="flex items-center justify-center flex-wrap">
            <li className="font-bold mx-2">
              Person's name: address <span className="font-light">details</span>
            </li>
            <li className="font-bold mx-2">
              Email: <span className="font-light">details</span>
            </li>
            <li className="font-bold mx-2">
              Phone: <span className="font-light">details</span>
            </li>
            <li className="font-bold mx-2">
              Website: <span className="font-light">details</span>
            </li>
            <li className="font-bold mx-2">
              Bank: <span className="font-light">details</span>
            </li>
            <li className="font-bold mx-2">
              Account Number: <span className="font-light">details</span>
            </li>
            <li className="font-bold mx-2">
              Account Holder: <span className="font-light">details</span>
            </li>
          </ul>
        </footer>
        {/* End of Footer component */}
      </main>
    </>
  )
}
