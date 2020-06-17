import { Injectable } from '@angular/core';
import { HttpService } from '../http.service/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  register(registerData) {
    return this.httpService.post('user/userSignUp', registerData);
  }

  login(loginData) {
    return this.httpService.post('user/login', loginData);
  }

  requestForgot(forgotData) {
    return this.httpService.post('user/reset', forgotData);
  }

  resetPassword(resetData, token) {
    return this.httpService.post(
      `user/reset-password?access_token=${token}`,
      resetData
    );
  }
}
