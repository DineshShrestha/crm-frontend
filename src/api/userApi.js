import axios from 'axios'
export const userLogin = (frmData) => {

    const loginUrl = 'http://localhost:3001/v1/user/login'
    return new Promise(async(resolve, reject) => {
        try {
            const res = await axios.post(loginUrl, frmData)
            resolve(res.data)

            if (res.data.status === "success") {
                sessionStorage.setItem("accessJWT", res.data.accessJWT)
                localStorage.setItem("crmSite", JSON.stringify({ refreshJWT: res.data.refreshJWT }))
            }
        } catch (error) {
            console.log(error.message)
            reject(error)
        }
    })
}