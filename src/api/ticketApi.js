import axios from 'axios'
export const getAlltickets = () => {
    return new Promise(async(resolve, reject) => {
        try {
            const result = await axios.get(
                'http://localhost:3001/v1/ticket', {
                    headers: {
                        Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJhbWVzQGdtYWlsLmNvbSIsImlhdCI6MTYyMjQ2NDUzOSwiZXhwIjoxNjIyNDY2MzM5fQ.w8MPWOxvlO909kbAxFxcW0SKyw057Nsm-c-NBCjWcuc'
                    }
                }
            )
            resolve(result)
        } catch (error) {
            reject(error)
        }
    })

}