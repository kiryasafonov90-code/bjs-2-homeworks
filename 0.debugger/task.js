function getUsersNamesInAgeRange(users, gender) {
  const filtered = users.filter(user => user.gender === gender);
  
  if (!filtered.length) return 0;

  const totalAge = filtered.map(user => user.age).reduce((sum, age) => sum + age, 0);
  
  return totalAge / filtered.length;
}


function getUsersNamesInAgeRange(users, gender) {
    const filtered = users.filter(u => u.gender === gender);
    
    if (filtered.length === 0) {
        return 0;
    }

    const ages = filtered.map(u => u.age);
    const sum = ages.reduce((acc, val) => acc + val, 0);

    return sum / filtered.length;
}