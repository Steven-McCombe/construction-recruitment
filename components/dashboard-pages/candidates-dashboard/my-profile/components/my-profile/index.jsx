import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";
import { useState } from "react";

const Index = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  return (
    <div className="widget-content">
      <LogoUpload />
      {/* End logo and cover photo components */}

      <FormInfoBox />
      {/* compnay info box */}
    </div>
  );
};

export default Index;
