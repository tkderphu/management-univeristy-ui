import { Request } from "../../utils/api.call.utils";
import { AuthResponse } from "../model/auth.response";
import { AuthenRequest } from "../model/authen.request";
import { ChangePasswordRequest } from "../model/change.password.request";
import { ForgetPasswordRequest } from "../model/forget.password.request";
import { RegisterRequest } from "../model/register.request";

class AuthenService {

    authenticate(authenRequest: AuthenRequest):AuthResponse | undefined {
        let authResponse;
        Request.call(
            "/users/auth/login",
            'POST',
            authenRequest
        )
        .then((response: any) => {
            authResponse = response;
        })
        .catch(error => {
            alert(error.message)
        })
        return authResponse;
    }

    register(registerRequest: RegisterRequest): void {
        Request.call(
            "/users/auth/register",
            'POST',
            registerRequest
        )
        .then((response: any) => {
            alert(response.message)
        })
        .catch(error => {
            alert(error.message)
        })
    }

    changePassword(changePasswordRequest: ChangePasswordRequest): void {
        Request.call(
            "/users/auth/change-password",
            'POST',
            changePasswordRequest
        )
        .then((response: any) => {
            alert(response.message)
        })
        .catch(error => {
            alert(error.message)
        });
    }

    forgetPasswor(forgetPasswordRequest: ForgetPasswordRequest): void {
        Request.call(
            "/users/auth/forgot-password",
            'POST',
            forgetPasswordRequest
        )
        .then((response: any) => {
            alert(response.message)
        })
        .catch(error => {
            alert(error.message)
        })
    }

}

export default new AuthenService();