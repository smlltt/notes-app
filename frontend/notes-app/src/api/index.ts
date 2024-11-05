const endpointKeys = ["login", "getUser", "createAccount"] as const;
type EndpointKey = (typeof endpointKeys)[number];

export const endpoints: Record<EndpointKey, string> = {
  login: "/users/login",
  getUser: "/users/user",
  createAccount: "/users/create-account",
};
