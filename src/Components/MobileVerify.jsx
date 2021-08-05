import PageTitle from "./PageTitle";

const MobileVerify = () => {
  return (
    <div className="container">
      <PageTitle title="Mobile Number Verify" />
      <div className="mobile_verify_container">
        <div className="verify_box">
          <article className="verify_headline">
            OTP has been sent to you on 0719138538 please enter it below.
          </article>
          <div className="input_group">
            <label htmlFor="code">6 digital code*</label>
            <input id="code" type="number" />
          </div>
          <button className="btn btn--block" >Verify</button>
        </div>
      </div>
    </div>
  );
};

export default MobileVerify;
