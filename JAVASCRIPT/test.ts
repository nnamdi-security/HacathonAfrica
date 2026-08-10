interface UserProfile {
  name: string;
  age: number;
  bio?: string;
  status: "active" | "inactive";
}

function describeUser(user: UserProfile): string {
  let summary = `Name: ${user.name}, Age: ${user.age}, Status: ${user.status}`;

  if (typeof user.bio === "string") {
    summary += `, Bio: ${user.bio}`;
  }

  return summary;
}

const result = describeUser({
  name: "Nnamdi",
  age: 28,
  bio: "Great",
  status: "active",
});

console.log(result);