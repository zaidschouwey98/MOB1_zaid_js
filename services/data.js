import AsyncStorage from "@react-native-async-storage/async-storage";
const url = "http://127.0.0.1:8000/api/";

class Provider {
  getBasesFromApi() {
    return fetch(url + "bases")
      .then((response) => response.json())
      .catch((error) => {
        console.error(error);
      });
  }
  async getReportsFromApi() {
    return fetch(url + "reports", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("token")),
      },
    }).then((response) => response.json());
  }
  async getMyActionsInShift(id) {
    return fetch(url + "myactionsinshift/" + id, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("token")),
      },
    }).then((response) => response.json());
  }
  async getMissingChecks() {
    return fetch(url + "missingchecks/" + localStorage.getItem("baseId"), {
      method: "GET",
      headers: {
        Authorization: "Bearer " + (await AsyncStorage.getItem("token")),
      },
    }).then((response) => response.json());
  }
  async postPharmaValue(batch_id, drugsheet_id, start, end, date) {
    return fetch(url + "pharmacheck", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await AsyncStorage.getItem("token")),
      },
      body: JSON.stringify({
        batch_id: batch_id,
        drugsheet_id: drugsheet_id,
        start: start,
        end: end,
        date: date,
      }),
    });
  }
  async postNovaValue(nova_id, drugsheet_id, start, end, date, drug_id) {
    return fetch(url + "novacheck", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + (await AsyncStorage.getItem("token")),
      },
      body: JSON.stringify({
        nova_id: nova_id,
        drugsheet_id: drugsheet_id,
        start: start,
        end: end,
        date: date,
        drug_id: drug_id,
      }),
    });
  }
}
export default Provider;
