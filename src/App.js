import { useState, useEffect } from 'react';
import './App.css';


export default function App() {

  const [data, setData]= useState('');

  useEffect(() => {
    function handleEvent(message) {
      console.log(message.data);
      setData('React Native Event '+message.data.message+' '+message.data.triggeredAt);
    }

    document.addEventListener("reactNative", handleEvent);
    window.addEventListener("reactNative", handleEvent);

    return () =>
      document.removeEventListener("reactNative", handleEvent);
  }, []);

const enableBioMetric = () => {
    window.ReactNativeWebView.postMessage('BiometricAuthentication')
}
  return (
    <div className="App">
      <h1>Webview Screen</h1>
      <h1>Enable FaceID</h1>
      <button onClick={enableBioMetric}>Unlock with FaceID</button>
      <></>
      {data?`${data}`:''}
    </div>
  );
}
