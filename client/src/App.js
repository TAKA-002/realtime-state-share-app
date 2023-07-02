import ButtonAppBar from "./components/layout/ButtonAppBar"; // header
import Footer from "./components/layout/Footer";
import StacksList from "./components/layout/Stacks";
import Button from "./components/ui/BaseButton";
import BaseSelect from "./components/ui/BaseSelect";

function App() {
  const sectionStyle = {
    margin: "48px 24px",
  };

  return (
    <>
      <ButtonAppBar />

      <section style={sectionStyle}>
        {/* 
        ■ 全リスト
        スペシャルコンテンツ
        フリースペース
        トップページ
        きょうの注目動画
        試写・公開機能CMS
        */}

        <StacksList>
          <BaseSelect labelText="スペシャルコンテンツ" />
          <Button />
        </StacksList>

        <StacksList mt="40px">
          <BaseSelect labelText="フリースペース" />
          <Button />
        </StacksList>
      </section>

      <Footer />
    </>
  );
}

export default App;
