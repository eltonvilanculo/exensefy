import { api } from "../services/api";

export async function getUserByToken(token: string) {
  const response = await api.get("/me", {
    headers: {
      Authorization: "Bearer " + token,
    },
  });

  return response.data.user;
}
