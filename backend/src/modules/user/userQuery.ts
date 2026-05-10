export const GET_USER_BY_ID = `
SELECT
  id,
  name,
  email,
  mobile,
  address,
  profile_image
FROM users
WHERE id = $1
`;

export const UPDATE_USER = `
UPDATE users
SET
  name = $1,
  email = $2,
  mobile = $3,
  address = $4,
  profile_image = $5
WHERE id = $6
RETURNING *
`;

export const GET_PASSWORD_BY_ID = `
SELECT password
FROM users
WHERE id = $1
`;

export const UPDATE_PASSWORD = `
UPDATE users
SET password = $1
WHERE id = $2
`;
