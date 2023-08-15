import FormInfoBox from "./FormInfoBox";
import LogoUpload from "./LogoUpload";
import { useState } from "react";

const Index = () => {
  const [avatarUrl, setAvatarUrl] = useState("");

  return (
    <div className="widget-content">
      <LogoUpload setAvatarUrl={setAvatarUrl} />
      <div className="text-center"> 
        {avatarUrl && (
          <div className="avatar-container">
            <img className="rounded-circle shadow p-1 m-2" src={avatarUrl} alt="User Avatar" />
          </div>
        )}
      </div>
      <FormInfoBox avatarUrl={avatarUrl} />
    </div>
  );
};

export default Index;
