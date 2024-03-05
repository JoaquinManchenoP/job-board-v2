import React, { useState } from "react";
import { doc, deleteDoc } from "firebase/firestore";
import { db } from "../../../firebase";
import { TiDelete } from "react-icons/ti";

export default function UserListingRow({ jobData }) {
  const [deleatedDocument, setDeleatedDocument] = useState(false);

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
    <tr className="h-14 w-7/10 border-t bg-gray-200 shadow-2xl ">
      <td className="h-[50px] w-2/5  ">
        <div className="flex h-full ">
          <div className="w-full h-full flex-grow flex flex-col justify-center pl-3">
            {/* <Link href={`/pages/jobListing/${jobData.id}`}> */}
            <div className="position__title text-md  ">{jobData.jobTitle}</div>
            {/* </Link> */}
            <div className="date__posted text-xs">{jobData.currentDate}</div>
          </div>
          <div
            className="w-2/12 h-full bg-red-500 flex items-center justify-center rounded-md cursor-pointer "
            onClick={deleteDocument}
          >
            <TiDelete className="text-4xl text-white" />
          </div>
        </div>
      </td>
    </tr>
  );
}
