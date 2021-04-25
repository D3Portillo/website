export default function Input({
  placeholder,
  type = "text",
  name,
  required = false,
}) {
  return (
    <input
      name={name}
      required={required}
      placeholder={placeholder}
      type={type}
      className="bg-transparent text-gray-400 lg:text-2xl py-4 border-b border-gray-600 outline-none"
    />
  )
}
