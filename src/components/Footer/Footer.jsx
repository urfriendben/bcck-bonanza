import logo from '@/assets/logo.svg';
import './Footer.scss';
import { connect } from 'react-redux';

function Footer({}) {

  return (
    <div className="footer">
      <img className="logo" src={logo} alt="logo" />
      <div className="links-container">
        <div className="links">
          <span className="btn btn-min">Contact us</span>
          <span className="btn btn-min">Help Center</span>
          <span className="btn btn-min">The Group</span>
          <span className="btn btn-min">Affiliates</span>
        </div>
        <div className="links">
          <span className="btn btn-min">Information</span>
          <span className="btn btn-min">Terms & Conditions</span>
          <span className="btn btn-min">Payment methods</span>
          <span className="btn btn-min">Bonus Terms</span>
          <span className="btn btn-min">Responsible Gaming</span>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
