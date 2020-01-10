import axios from "axios";
export function getbanner() {
  let url = "/api/getbannercms";
  return axios.get(url);
}
export function updatebanner({ flag, id }) {
  let url = "/api/upbanner";
  return axios.post(url, { flag, id });
}
