const CopyrightFooter = () => {
  return (
    <div className="copyright-text">
      <p>
        © {new Date().getFullYear()} Construction job board by{" "}
        <a
          href="https:www.twitter.com/st_mccombe"
          target="_blank"
          rel="noopener noreferrer"
        >
          Steven McCombe
        </a>
      . All Rights Reserved.
      </p>
    </div>
  );
};

export default CopyrightFooter;
