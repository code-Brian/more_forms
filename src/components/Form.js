import { useState } from 'react'

export const Form = (props)=> {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false)

    const createUser = (e)=> {
        e.preventDefault()
        const newUser = { firstName, lastName, email, password, confirmPassword }
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
        setHasBeenSubmitted(true)
    }

    return(
        <div>
            <form onSubmit={ createUser }>
                {
                    hasBeenSubmitted ?
                    <h3>Thank you for submitting the form!</h3> :
                    <h3>Welcome! Please submit the form!</h3>
                }
                <div>
                    <label>First Name: </label>
                    <input type="text" onChange={(e)=>{ setFirstName(e.target.value)}}></input>
                </div>
                <div>
                    <label>Last Name: </label>
                    <input type="text" onChange={(e)=>{ setLastName(e.target.value)}}></input>
                </div>
                <div>
                    <label>Email: </label>
                    <input type="text" onChange={(e)=>{ setEmail(e.target.value)}}></input>
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" onChange={(e)=>{ setPassword(e.target.value)}}></input>
                </div>
                <div>
                    <label>Confirm Password: </label>
                    <input type="password" onChange={(e)=>{ setConfirmPassword(e.target.value)}}></input>
                </div>
            </form>

            <div>
                <ul>
                    <li>First Name: { firstName }</li>
                    <li>Last Name: { lastName }</li>
                    <li>Email: { email }</li>
                    <li>Password: { password }</li>
                    <li>Confirm Password: { confirmPassword }</li>
                </ul>
            </div>
        </div>
    )
}