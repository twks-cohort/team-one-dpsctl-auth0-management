function (user, context, callback) {
  const namespace = 'https://github.com/twks-cohort/';
  context.idToken[namespace + 'teams'] = user.app_metadata.roles;
  callback(null, user, context);
}