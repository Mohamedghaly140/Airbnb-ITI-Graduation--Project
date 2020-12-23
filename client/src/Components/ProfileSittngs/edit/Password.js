import React from "react";


let Password = () => {
    return (
        <form>
            <div className="form-group">
                <label for="Current">Current password</label>
                <input type="password" className="form-control" id="Current" aria-describedby="emailHelp" />
                <a id="emailHelp" className="form-text text-muted" role="button">Need a New Password?</a>
            </div>
            <div className="form-group">
                <label for="New">New password</label>
                <input type="password" className="form-control" id="New" />
            </div>
            <div className="form-group">
                <label for="New">Confirm password</label>
                <input type="password" className="form-control" id="New" />
            </div>
            <button type="submit" className="btn btn-primary">Update Password</button>
        </form>
    )
}

export default Password;