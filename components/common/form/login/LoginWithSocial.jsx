// .\components\common\form\login\LoginWithSocial.jsx

const LoginWithSocial = () => {
  return (
    <div className="btn-box row">
      <div className="col-12">
        <p className="text-center">Social Login Currently Unavailable - Coming Soon</p>
      </div>
      <div className="opacity-25 col-lg-6 col-md-12">
        <button className="theme-btn social-btn-two facebook-btn" disabled>
          <i className="fab fa-facebook-f"></i> Log In via Facebook
        </button>
      </div>
      <div className="opacity-25 col-lg-6 col-md-12">
        <button className="theme-btn social-btn-two google-btn" disabled>
          <i className="fab fa-google"></i> Log In via Gmail
        </button>
      </div>
    </div>
  );
};

export default LoginWithSocial;
