import TextFieldsIcon from "@material-ui/icons/TextFields";
import CreateIcon from "@material-ui/icons/Create";
import NoteIcon from "@material-ui/icons/Note";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import CropIcon from "@material-ui/icons/Crop";
import TimerIcon from "@material-ui/icons/Timer";
import "./index.css";
const RightToolbar = () => {
  return (
    <div className="preview__toolbarRight">
      <TextFieldsIcon />
      <CreateIcon />
      <NoteIcon />
      <MusicNoteIcon />
      <AttachFileIcon />
      <CropIcon />
      <TimerIcon />
    </div>
  );
};
export default RightToolbar;
