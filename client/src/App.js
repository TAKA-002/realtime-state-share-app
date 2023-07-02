import { useState } from "react";
import ButtonAppBar from "./components/layout/ButtonAppBar"; // header
import Footer from "./components/layout/Footer";
import StacksList from "./components/layout/Stacks";
import Button from "./components/ui/BaseButton";
import BaseSelect from "./components/ui/BaseSelect";

function App() {
  const [special, setSpecial] = useState(100);
  const [free, setFree] = useState(100);

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
          <BaseSelect name="specialcontents" labelText="スペシャルコンテンツ" stateData={special} setState={setSpecial} />
          <Button setState={setSpecial} />
        </StacksList>

        <StacksList mt="40px">
          <BaseSelect name="freespace" labelText="フリースペース" stateData={free} setState={setFree} />
          <Button setState={setFree} />
        </StacksList>
      </section>

      <Footer />
    </>
  );
}

export default App;
