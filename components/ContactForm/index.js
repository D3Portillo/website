import SubmitButton from "./SubmitButton"
import Textarea from "./Textarea"
import Input from "./Input"
export const FORM_ID = "CONTACT_FORM_ID"

/** @type { import("react").FormEventHandler } */
function handleSubmit(e) {
  e.preventDefault()
  const $form = e.target
  function sayThanks() {
    window.location.href = "/thanks"
  }
  const data = new FormData($form)
  fetch("https://formspree.io/f/mnqlnqnq", {
    method: "POST",
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then(sayThanks)
    .catch(sayThanks)
}

export default function ContactForm() {
  return (
    <div className="-mx-10">
      <form
        method="POST"
        onSubmit={handleSubmit}
        id={FORM_ID}
        className="bg-black px-20 bg-opacity-90 pt-36 pb-40 flex flex-col space-y-4"
      >
        <Input name="name" placeholder="Your name" />
        <Input
          required
          name="email"
          placeholder="your@email.com"
          type="email"
        />
        <Textarea
          required
          name="message"
          placeholder="Hi Denny, let’s grab a coffee!"
        />
        <div className="flex justify-center pt-16">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}
