const URI_CONTACT_SVC =
  process.env.REACT_APP_URI_USER_SVC || "http://localhost:8080";

const PREFIX_CONTACT_SVC = "/api/contacts";

const CREATE_USER = "";
const VIEW_USER = "/";

export const URL_CREATE_USER = URI_CONTACT_SVC + PREFIX_CONTACT_SVC;
export const URL_VIEW_USER = URI_CONTACT_SVC + PREFIX_CONTACT_SVC + VIEW_USER;
