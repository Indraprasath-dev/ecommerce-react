interface InputProps {
    id: string
    name: string
    type: string
    value: string
    autoComplete?: string
    className?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({ id = '', name = '', type = '', autoComplete = '', value='', className = '', onChange }: InputProps) => {

    const baseStyle = "block w-full rounded-md border-0 px-1 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm sm:leading-6"

    return (
        <input id={id}
            name={name}
            type={type}
            value={value}
            required
            autoComplete={autoComplete}
            className={`${baseStyle} ${className}`}
            onChange={onChange} />
    )
}

export default Input
