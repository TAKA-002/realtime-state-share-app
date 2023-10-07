import { useState } from "react";
import ButtonAppBar from "./components/layout/ButtonAppBar"; // header
import Footer from "./components/layout/Footer";
import StacksList from "./components/layout/Stacks";
import DeleteBtn from "./components/ui/DeleteBtn";
import BaseSelect from "./components/ui/BaseSelect";

function App() {
  const [special, setSpecial] = useState(100);
  const [free, setFree] = useState(100);
  const [toppage, setToppage] = useState(100);
  const [chumoku, setChumoku] = useState(100);
  const [funcCMS, setFuncCMS] = useState(100);

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
          <DeleteBtn name="specialcontents" setState={setSpecial} />
        </StacksList>

        <StacksList mt="40px">
          <BaseSelect name="freespace" labelText="フリースペース" stateData={free} setState={setFree} />
          <DeleteBtn name="freespace" setState={setFree} />
        </StacksList>

        <StacksList mt="40px">
          <BaseSelect name="toppage" labelText="トップページ" stateData={toppage} setState={setToppage} />
          <DeleteBtn name="toppage" setState={setFree} />
        </StacksList>

        <StacksList mt="40px">
          <BaseSelect name="chumokumovie" labelText="きょうの注目動画" stateData={chumoku} setState={setChumoku} />
          <DeleteBtn name="chumokumovie" setState={setChumoku} />
        </StacksList>

        <StacksList mt="40px">
          <BaseSelect name="funccms" labelText="試写・公開機能CMS" stateData={funcCMS} setState={setFuncCMS} />
          <DeleteBtn name="funccms" setState={setFuncCMS} />
        </StacksList>
      </section>

      <Footer />
    </>
  );
}

export default App;
