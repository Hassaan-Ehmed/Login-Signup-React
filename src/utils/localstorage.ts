import { AES, enc } from "crypto-js";
import { seceretKey } from "./Incryption";
interface Data {
  key: string;
  data?: any;
}

export const saveDataToLocalStorage = (key: string, data: any) => {
  try {
    const str_parsed_data = JSON.stringify(data);
    // "[{{}}]"
    let encrypted_data = AES.encrypt(str_parsed_data, seceretKey).toString();
    // 983217jkhsadp982h3e as string
    
    localStorage.setItem(key, encrypted_data);
  } catch (error) {
    console.log(error);
  }
};

export const getDataToLocalStorage = (key: string) => {
  try {
    let res = localStorage.getItem(key);
    if (!res) {
      return null;
    }
    let decrypt_data = AES.decrypt(res, seceretKey).toString(enc.Utf8);
    if (!decrypt_data) {
      localStorage.clear();
      return null;
    }
    decrypt_data = JSON.parse(decrypt_data);
    console.log("decrypt_data",decrypt_data)
    
    return decrypt_data;
  } catch (error) {
    console.log(error);
  }
};
