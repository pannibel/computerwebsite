import "../styles/globals.scss";
import { Provider } from "react-redux";
//import store from "@/store";

export default function App({ Component, pageProps }) {
  return (
    
      <Component {...pageProps} />
    
  );
}