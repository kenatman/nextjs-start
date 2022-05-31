import Layout from "../components/Layout";
import "../styles/globals.css"; // 모듈이 아닌 파일을 임포트하려면 _app.js에서 가능하다.

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
