import { Request } from "../../utils/api.call.utils";
import { AuthResponse } from "../model/auth.response";
import { AuthenRequest } from "../model/authen.request";
import { ChangePasswordRequest } from "../model/change.password.request";
import { ForgetPasswordRequest } from "../model/forget.password.request";
import { RegisterRequest } from "../model/register.request";
import {Axios, AxiosResponse} from "axios";

class AuthenService {

    authenticate(authenRequest: AuthenRequest): Promise<AxiosResponse<AuthResponse>> {
        return Request.call(
            "/users/auth/login",
            'POST',
            authenRequest
        )
    }

    register(registerRequest: RegisterRequest): Promise<AxiosResponse<any>> {
        return Request.call(
            "/users/auth/register",
            'POST',
            registerRequest
        );
    }

    changePassword(changePasswordRequest: ChangePasswordRequest): Promise<AxiosResponse<any>> {
        return Request.call(
            "/users/auth/change-password",
            'POST',
            changePasswordRequest
        )
    }

    forgetPasswor(forgetPasswordRequest: ForgetPasswordRequest): Promise<AxiosResponse<any>> {
        return Request.call(
            "/users/auth/forgot-password",
            'POST',
            forgetPasswordRequest
        )
    }

}

export default new AuthenService();
