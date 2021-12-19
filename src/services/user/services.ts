import { User } from "../../models/user/types";
import { authorizationFetch } from "../../utils/requests/auth";

export const login = async (
  basicUser: Partial<User>
): Promise<Partial<User> | Error> => {
  const response = await fetch("http://104.237.129.63:8016/api/token/", {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify(basicUser),
  });

  if (basicUser.email && basicUser.password && response.status === 200) {
    const tokens: { access: string; refresh: string } = await response.json();

    const logUser: Partial<User> = {
      email: basicUser.email,
      password: basicUser.password,
      username: basicUser.username,
      token: tokens.access,
      refreshToken: tokens.refresh,
    };
    // console.log(logUser);

    return logUser;
  } else {
    throw new Error("Write your email, username and password");
  }
};

export const logout = async (refreshToken: any) => {
  const response = await authorizationFetch("http://104.237.129.63:8016/api/users/logout", {
    headers: { "content-type": "application/json" },
    method: "POST",
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if (response.status === 204) {
    return response.status;
  }
};

export const signin = async (
  basicUser: Partial<User>
): Promise<Partial<User> | Error> => {
  const response = await fetch(
    "http://104.237.129.63:8016/api/users/register",
    {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(basicUser),
    }
  );

  if (basicUser.email && basicUser.password && response.status === 200) {
    const tokens: { access: string; refresh: string } = await response.json();

    const logUser: Partial<User> = {
      email: basicUser.email,
      password: basicUser.password,
      username: basicUser.username,
      token: tokens.access,
      refreshToken: tokens.refresh,
    };

    return logUser;
  } else {
    throw new Error("Write your email, username and password");
  }
};
