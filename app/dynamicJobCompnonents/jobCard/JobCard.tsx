import React from "react";
import logo from "../../images/logo.png";
import Image from "next/image";
import { FaBuilding } from "react-icons/fa";
import { FaLocationPin } from "react-icons/fa6";

export default function JobCard({ position }) {
  function formatDate(dateString) {
    const date = new Date(dateString);
    const mm = String(date.getMonth() + 1).padStart(2, "0"); // January is 0!
    const dd = String(date.getDate()).padStart(2, "0");
    const yy = date.getFullYear().toString().substr(-2);

    return `${mm}.${dd}.${yy}`;
  }

  const originalFormatDate = position.currentDate;
  const formatedDate = formatDate(originalFormatDate);

  console.log("this is the job passed", position);
  return (
    <div className="h-40 mobile:w-11/12 tablet:w-10/12 max-w-[700px] min-w-[400px]  bg-white rounded-md shadow-xl flex">
      <div className="company_image h-full w-[130px] flex flex-col items-center justify-center">
        <div className="image h-20 w-20  rounded-full">
          <Image src={logo} alt="image" />
        </div>
      </div>
      <div className="info h-full w-full">
        <div className="position__title h-11 w-full  flex items-center border-b-2 ">
          <span className="text-lg">{position.jobTitle}</span>
        </div>
        <div className="job h-6 w-full flex text-sm space-x-5    ">
          <div className="company__name__container flex space-x-1 items-center">
            <FaBuilding />
            <div className="company__name font-bold">
              {position.companyName}
            </div>
          </div>
          <div className="location__container flex space-x-1 items-center">
            <FaLocationPin className="text-xs" />
            <div className="loaction">Berlin, Germany</div>
          </div>
          <div className="date flex items-center">{formatedDate}</div>
        </div>
        <div className="h-[85px] w-full ">
          <span className="text-sm line-clamp-2 pt-5 mr-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
            nesciunt dolorum mollitia accusamus labore asperiores soluta dolore
            nihil illum consequatur quod ad esse neque reiciendis facere
            deleniti aperiam, magnam autem fugit libero sequi? Quo pariatur illo
            non ea odio in, qui debitis incidunt laboriosam excepturi
            dignissimos! Vero culpa quod accusamus reiciendis molestiae nulla
            unde, vel explicabo similique quisquam harum nostrum ratione quaerat
            ducimus molestias a impedit dolorem, enim cum. Neque, velit!
            Accusamus, molestias delectus assumenda nostrum illum architecto
            sequi culpa tenetur dolorum sit quisquam reprehenderit deserunt eius
            veritatis, laboriosam odio animi, possimus nulla dicta magnam
            praesentium nobis minus. Pariatur soluta sapiente repellendus,
            impedit cupiditate culpa ipsa, iste repudiandae omnis laudantium
            quod exercitationem vero fugiat unde quaerat iusto ipsam? Alias
            ipsam nihil ducimus distinctio quam cum iusto corrupti aliquam quod
            ad labore harum, iure commodi sit? Ducimus, eligendi. Esse
            perferendis cum ratione illo itaque, beatae quis non nisi ut
            temporibus ea nesciunt adipisci eum nobis asperiores. Velit, eius
            vero laboriosam facere accusamus pariatur? Dolorum modi nulla vero
            ad. Accusamus eos obcaecati molestiae magnam minima, velit quisquam
            porro, laboriosam quae ipsum, quam maiores debitis natus autem
            repellendus quia doloremque repudiandae fuga. A nihil nostrum autem,
            vero facere unde consequatur voluptatem repudiandae quia.
          </span>
        </div>
      </div>
    </div>
  );
}
