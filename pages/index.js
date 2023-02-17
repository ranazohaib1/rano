import dynamic from "next/dynamic";
import Seo from "../components/Seo";
import EdinaPreview from "../components/pages/preview";
import EdinaHomeSidebar from "../components/pages/home-sidebar";

const index = () => {
  return (
    <>
      <Seo pageTitle="Preview" />
      <EdinaHomeSidebar />
      {/* <EdinaPreview /> */}
    </>
  );
};

export default dynamic(() => Promise.resolve(index), { ssr: false });
