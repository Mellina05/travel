import firebase from '@react-native-firebase/app';
 
const apps = firebase.apps;

apps.forEach(app => {
  console.log('App name: ', app.name);
});