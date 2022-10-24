export default function () {

    const isDarkMode = useState('useDarkMode', () => false)

    const toggleDarkMode = () => isDarkMode.value = !isDarkMode.value

    return {
        isDarkMode,
        toggleDarkMode
    }
}