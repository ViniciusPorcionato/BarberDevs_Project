import AsyncStorage from "@react-native-async-storage/async-storage";
import { decode, encode } from "base-64";
import { jwtDecode } from "jwt-decode";


if (!global.atob) {
    global.atob = decode
}

if (!global.btoa) {
    global.btoa = encode
}

export const userDecodeToken = async () => {

    // const token = await AsyncStorage.getItem("token");
    const token = JSON.parse(await AsyncStorage.getItem("token"));
  
    if (token === null) {
      return null;
    }
  
    const decoded = jwtDecode(token);
  
    console.log(decoded);

    return{
      token: token,
      name : decoded.name,
      email: decoded.email,
      role: decoded.role,
      jti: decoded.jti
    }
  };