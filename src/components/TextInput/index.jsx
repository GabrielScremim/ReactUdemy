import './style.css';

export const TextInput = ({ search, handleChange }) => {
    return (
        <input
            onChange={handleChange}
            value={search}
            type="search" />
    )
}