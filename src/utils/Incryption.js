import CryptoJS from 'crypto-js'

const seceretKey = 'm!j3sfF%a^i!bA9Ks'; // 17 Digit Hash Code >>


const Encrypt =  word =>{

    return CryptoJS.AES.encrypt(word,seceretKey).toString();

}


const Decrypt = word => {

    return CryptoJS.AES.decrypt(word,seceretKey).toString(CryptoJS.enc.Utf8);
}


export {Encrypt,Decrypt};