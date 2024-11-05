const keys = ["user"] as const;
type Key = (typeof keys)[number];

export const queryKeys: Record<Key, string> = {
  user: "user",
};
