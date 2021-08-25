export default function Notes() {
  return (
    <>
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
    </>
  )
}
