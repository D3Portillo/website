export default function Textarea({
  placeholder,
  type = "text",
  name,
  required = false,
}) {
  return (
    <textarea
      name={name}
      required={required}
      placeholder={placeholder}
      type={type}
      rows="3"
      className="outline-none bg-transparent text-gray-400 lg:text-2xl py-4 border-b border-gray-600"
    />
  )
}
