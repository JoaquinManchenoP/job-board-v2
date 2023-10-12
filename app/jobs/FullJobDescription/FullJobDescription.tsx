import React from "react";

export default function FullJobDescription() {
  return (
    <div className="job__description h-full w-9/12 bg-red-600 flex flex-col items-center justify-center">
      <div className="description__content h-full w-10/12 bg-orange-400">
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae quasi
          quaerat vero, earum iste iure omnis magnam maiores, id facere culpa
          laudantium provident architecto molestiae. Ullam quidem unde voluptas,
          eligendi incidunt consequatur esse numquam tempora cum iusto
          perferendis impedit sequi ex voluptate explicabo accusantium? Cumque
          ab nesciunt mollitia quo optio?
        </span>
      </div>
      <div className="apply__job h-10 w-[220px] bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded mt-2 flex items-center justify-center">
        <span>Apply to Job</span>
      </div>
    </div>
  );
}
