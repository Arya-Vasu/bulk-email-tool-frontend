import React, { useContext } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import DraftsIcon from "@mui/icons-material/Drafts";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import ArchiveIcon from "@mui/icons-material/Archive";
import UnarchiveIcon from "@mui/icons-material/Unarchive";
import DeleteIcon from "@mui/icons-material/Delete";
import RestoreFromTrashIcon from '@mui/icons-material/RestoreFromTrash';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarRateIcon from "@mui/icons-material/StarRate";
import {
  changeIsArchivedValue,
  changeIsDeletedValue,
  changeIsSelectedValue,
  changeIsStarredValue,
  changeMarkReadValue,
} from "./Utils";
import { mailData } from "./App";

export function Home({ mails, sentMail = false }) {
  const [allMails, setAllMails] = useContext(mailData);

  return (
    <div
      className={mails?.markRead ? "readEmailTile" : "unReadEmailTile"}
      id="emailTile"
    >
      <FormControlLabel
        style={{ width: "30%", padding: "0 10px", color: "black" }}
        // value="end"
        control={<Checkbox />}
        label={mails?.from?.name}
        labelPlacement="end"
        onClick={() => {
          changeIsSelectedValue(mails.id, !mails.isSelected, allMails);
          setAllMails([...allMails]);
        }}
      />
      {console.log(allMails)}
      <p className="sujectBody">
        <span style={{ color: "black" }}>{mails?.subject} |</span>{" "}
        {mails?.message}
      </p>
      <p className="date">{mails?.dateTime}</p>

      {/* Action Icons */}

      {/* Archive/UnArchive Icons */}
      <div className="emailActionIcons">
        {!mails?.isArchived ? (
          <ArchiveIcon
            className="icon"
            onClick={() => {
              changeIsArchivedValue(mails.id, !mails.isArchived, allMails);
              setAllMails([...allMails]);
            }}
          ></ArchiveIcon>
        ) : (
          <UnarchiveIcon
            className="icon"
            onClick={() => {
              changeIsArchivedValue(mails.id, !mails.isArchived, allMails);
              setAllMails([...allMails]);
            }}
          ></UnarchiveIcon>
        )}

        {/* Delete/Restore Icons */}
        {mails?.isDeleted ? (
          <RestoreFromTrashIcon
            className="icon"
            onClick={() => {
              changeIsDeletedValue(mails.id, !mails.isDeleted, allMails);
              setAllMails([...allMails]);
            }}
          ></RestoreFromTrashIcon>
        ) : (
          <DeleteIcon
            className="icon"
            onClick={() => {
              changeIsDeletedValue(mails.id, !mails.isDeleted, allMails);
              setAllMails([...allMails]);
            }}
          ></DeleteIcon>
        )}

        {/* Read/UnRead Icons */}
        {mails?.markRead ? (
          <DraftsIcon
            className="icon"
            onClick={() => {
              changeMarkReadValue(mails.id, !mails.markRead, allMails);
              setAllMails([...allMails]);
            }}
          ></DraftsIcon>
        ) : (
          <LocalPostOfficeIcon
            className="icon"
            onClick={() => {
              changeMarkReadValue(mails.id, !mails.markRead, allMails);
              setAllMails([...allMails]);
            }}
          ></LocalPostOfficeIcon>
        )}

        {/* Star/UnStar Icon */}
        {mails?.isStarred ? (
          <StarRateIcon
            className="icon"
            onClick={() => {
              changeIsStarredValue(mails.id, !mails.isStarred, allMails);
              setAllMails([...allMails]);
            }}
          ></StarRateIcon>
        ) : (
          <StarBorderIcon
            className="icon"
            onClick={() => {
              changeIsStarredValue(mails.id, !mails.isStarred, allMails);
              setAllMails([...allMails]);
            }}
          ></StarBorderIcon>
        )}
      </div>
    </div>
  );
}
