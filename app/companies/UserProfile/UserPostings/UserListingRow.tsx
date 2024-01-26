import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { TiDelete } from "react-icons/ti";

export default function UserListingRow({ jobData }) {
  const [deleatedDocument, setDeleatedDocument] = useState(false);
  console.log("this is loaded", jobData.id);

  const deleteDocument = () => {
    const documentIdToDelete = jobData.id;
    const documentRef = doc(db, "jobPostings", documentIdToDelete);

    deleteDoc(documentRef)
      .then(() => {
        console.log("Document successfully deleted.");
        setDeleatedDocument(true);
      })
      .catch((error) => {
        console.error("Error deleting document:", error);
      });
  };

  if (deleatedDocument) {
    return null;
  }

  return (
    <tr className="h-14 w-full border-t bg-green-200 shadow-2xl ">
      <td className="pl-8  bg-purple-300 truncate pr-8">
        <div className="flex">
          <div className="w-11/12 bg-red-400">
            <div className="position__title text-md ">{jobData.jobTitle}</div>
            <div className="date__posted text-xs">11/12/2024</div>
          </div>
          <div
            className="w-1/12 bg-orange-500 flex items-center justify-center"
            onClick={deleteDocument}
          >
            <TiDelete className="text-2xl" />
          </div>
        </div>
      </td>
      <td className="text-right pr-3">100</td>
      <td className="text-right pr-4 ">50</td>
      <td className="text-right ">200</td>
    </tr>
  );
}
