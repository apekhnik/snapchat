import "./index.css";
import SendIcon from "@material-ui/icons/Send";
const Footer = (props) => {
  return (
    <div className="preview__footer" onClick={props.sendPost}>
      <h3>Send now</h3>
      <SendIcon className="preview__sendIcon" />
    </div>
  );
};
export default Footer;
