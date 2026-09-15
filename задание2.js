function getUsersNamesInAgeRange(users, gender) {
  const filtered = users.filter(user => user.gender === gender);
  if (filtered.length === 0) {
    return 0;
  }

  const totalAge = filtered.reduce((sum, user) => sum + user.age, 0);
  return totalAge / filtered.length;
}