export const sleep = (time: number) =>
  new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });

export async function fetchToken() {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };
  const body = {
    username: "periphery",
    password: "admin123",
    email: "luis.carrillo@enroutesystems.com",
  };
  const response = await fetch("http://104.237.129.63:8016/api/token/", {
    method: "post",
    headers: new Headers(headers),
    body: JSON.stringify(body),
  });
  const token = await response.json();
  return token;
}
