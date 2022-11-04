import axios from "axios";

const buildClient = ({ req }) => {
    if (typeof window === 'undefined') {
        // in the server of next
        // need to use 'http://SERVICENAME.NAMESPACE.svc.cluster.local;
        return axios.create({
            baseURL: 'http://ingress-nginx-controller.ingress-nginx.svc.cluster.local',
            headers: req.headers
        });
    } else {
        // in the browser
        // need to use empty string ''
        return axios.create({});
    }
}

export default buildClient;