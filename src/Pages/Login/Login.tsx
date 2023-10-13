import { loginStyle } from "./Style"

function Login (){

    return( <>
        <div>
            <h3>Welcome to To-do list app</h3>
        </div>
        <div>
            <h3>Type your name to start</h3>
        </div>
        <div>
        <loginStyle.input
        type="text"
        placeholder="text"
        />
        <loginStyle.StyledButton>
            Start
        </loginStyle.StyledButton>
        </div>
        
        </>
    )
}

export default Login