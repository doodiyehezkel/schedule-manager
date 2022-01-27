import { Link } from "react-router-dom";
import './Authentication.css'
export default function Authentication({ type, linkMethod, refEmail, refPassword, onSubmitHandler }) {
    return (
        <>
            <div className="authentication__container">
                <form onSubmit={onSubmitHandler}>
                    <div className="Authentication__header">
                        <h1>{type}</h1>
                    </div>
                    <div className="Authentication__field">
                        <input type="email" name="email" placeholder="Email" ref={refEmail} />
                    </div>
                    <div className="Authentication__field">
                        <input type="password" name="password" placeholder="Password" ref={refPassword} />
                    </div>
                    <div className="Authentication__submit">
                        <button type="submit">{type}</button>
                    </div>
                    <div className="authentication__flip">
                        <Link to={`/${linkMethod}`}> not yet registered ? {linkMethod}</Link>
                    </div>
                </form>
            </div>
        </>
    )
}