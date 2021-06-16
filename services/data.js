import AsyncStorage from '@react-native-async-storage/async-storage';
const url = 'http://127.0.0.1:8000/api/';

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
        'Authorization': 'Bearer ' + await AsyncStorage.getItem("token")
      }
    }).then((response) => response.json())
  }
  async getMyActionsInShift(id){
    return fetch(url + "myactionsinshift/"+id, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + await AsyncStorage.getItem("token")
      }
    }).then((response) => response.json())
  }
  async getMissingChecks(baseid){
    return fetch(url + "missingchecks/"+baseid, {
      method: "GET",
      headers: {
        'Authorization': 'Bearer ' + await AsyncStorage.getItem("token")
      }
    }).then((response) => response.json())
  }
}
export default Provider;

