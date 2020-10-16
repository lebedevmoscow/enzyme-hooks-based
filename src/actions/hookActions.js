import axios from 'axios'

export const getSecretWord = async (setSecretWord) => {
    const res = await axios.get('http://localhost:3030')
    setSecretWord(res.data)
}

// default export for mocking convenience
export default {
    getSecretWord
}