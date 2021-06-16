import AsyncStorage from '@react-native-async-storage/async-storage';

const url = "http://127.0.0.1:8000/api/"

class User {
  async saveToken(token) {
    console.log("Entrée dans fonction savetoken")
    try {
      console.log("Sa save le token")
      await AsyncStorage.setItem('token', token["token"])
      
    } catch (e) {
      // saving error
    }
  }
  async saveBase(baseid){
    try {
      await AsyncStorage.setItem('baseId', baseid)
    } catch (e) {
      // saving error
    }
  }
  async logInApi(initials, password,baseid) {
    const response = await fetch(url + "gettoken", {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        initials: initials,
        password: password
      })
    })
    this.saveToken(await response.json())
    this.saveBase(baseid);
  }
  async getToken() {
    let token = await AsyncStorage.getItem('token')
    return token
  }
  async logOut() {
    try {
      await AsyncStorage.setItem('token', "")
    } catch (error) {

    }
  }
}
export default User;