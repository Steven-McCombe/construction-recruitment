import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";
import { useState } from "react";

const Index = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  return (
    <div className="widget-content">
      <LogoUpload setAvatarUrl={setAvatarUrl}/>
      {/* End logo and cover photo components */}
      {avatarUrl && <img src={avatarUrl} alt="User Avatar" />}
      <FormInfoBox avatarUrl={avatarUrl}/>
      {/* compnay info box */}
    </div>
  );
};

export default Index;
