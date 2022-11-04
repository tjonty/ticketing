import { useEffect } from "react";
import useRequest from "../../hooks/use-request";

const signout = () => {
  const { doRequest } = useRequest({
    url: "/api/users/signout",
    method: "post",
    body: {},
    onSuccess: () => (window.location = "www.tickets-app-prod.store/"),
  });

  useEffect(() => {
    doRequest();
  }, []);

  return <div>Signing you out...</div>;
};

export default signout;
