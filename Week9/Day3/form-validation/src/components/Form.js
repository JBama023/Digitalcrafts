import { useState } from "react";

function Form() {
    const [signupForm, setSignupForm] = useState({});
    return(
    <div>
    <h1>LinkedIn Signup Form</h1>
    <form action="" >
        <input type="text" onChange={(e) => setSignupForm({ firstName: e.target.value })} name="firstName" placeholder="First Name" />
        <input type="text" onChange={(e) => setSignupForm({ lastName: e.target.value })} name="lastName" placeholder="Last Name" />
        <input type="text" onChange={(e) => setSignupForm({ email: e.target.value })}name="email" placeholder="Email" />
        <button>Submit</button>
    </form>
    </div>
    )
}
export default Form;