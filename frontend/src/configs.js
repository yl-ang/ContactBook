const URI_CONTACT_SVC =
  "http://contact-service-dev.ap-southeast-1.elasticbeanstalk.com/" ||
  "http://localhost:8080";

const PREFIX_CONTACT_SVC = "/api/contacts";

const GET_ALL_USERS = "";
const CREATE_USER = "";
const VIEW_USER = "/";
const UPDATE_USER = "/";
const DELETE_USER = "/";

export const URL_GET_ALL_USERS =
  URI_CONTACT_SVC + PREFIX_CONTACT_SVC + GET_ALL_USERS;
export const URL_CREATE_USER =
  URI_CONTACT_SVC + PREFIX_CONTACT_SVC + CREATE_USER;
export const URL_VIEW_USER = URI_CONTACT_SVC + PREFIX_CONTACT_SVC + VIEW_USER;
export const URL_UPDATE_USER =
  URI_CONTACT_SVC + PREFIX_CONTACT_SVC + UPDATE_USER;
export const URL_DELETE_USER =
  URI_CONTACT_SVC + PREFIX_CONTACT_SVC + DELETE_USER;
