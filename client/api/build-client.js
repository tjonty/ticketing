import axios from "axios";

const buildClient = ({ req }) => {
  if (typeof window === "undefined") {
    // in the server of next
    // need to use 'http://SERVICENAME.NAMESPACE.svc.cluster.local;
    return axios.create({
      baseURL: "http://www.tickets-app-prod.online/",
      headers: req.headers,
    });
  } else {
    // in the browser
    // need to use empty string ''
    return axios.create({});
  }
};

export default buildClient;
