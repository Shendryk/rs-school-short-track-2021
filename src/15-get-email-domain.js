function getEmailDomain (email) {
  return email.slice(email.indexOf('@') + 1);
}

module.exports = getEmailDomain;
