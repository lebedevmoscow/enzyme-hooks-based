import moxios from 'moxios'
import {getSecretWord} from './hookActions'

describe('moxios tests', () => {
    beforeEach(() => {
        moxios.install()
    })

    afterEach(() => {
        moxios.uninstall()
    })

    test('calls the getSecretWord callback on axios response', async () => {
        const secretWord = 'party'

        moxios.wait(() => {
            const req = moxios.requests.mostRecent()
            req.respondWith({
                status: 200,
                response: secretWord
            })
        })

        // create mock for calling arg

        const mockSetSecretWord = jest.fn()
        await getSecretWord(mockSetSecretWord)

        // see whether mock was ran with the correct arg
        expect(mockSetSecretWord).toHaveBeenCalledWith(secretWord)
    })
})