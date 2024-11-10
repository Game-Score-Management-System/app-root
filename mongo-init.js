db.createUser({
  user: 'bootcamp',
  pwd: 'bootcamp',
  roles: [{ role: 'readWrite', db: 'scoresdb' }]
});
