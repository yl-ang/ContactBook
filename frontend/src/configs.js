const URI_CONTACT_SVC =
  process.env.REACT_APP_URI_USER_SVC || "http://localhost:8080";

const PREFIX_CONTACT_SVC = "/api/contacts";

export const URL_CREATE_USER = URI_CONTACT_SVC + PREFIX_CONTACT_SVC;
