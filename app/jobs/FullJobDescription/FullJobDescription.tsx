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
      <div className="apply__job h-20 w-full bg-orange-200 flex items-centery justify-center">
        <button className="bg-blue-500 h-14 w-38 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
          Apply to job
        </button>
      </div>
    </div>
  );
}
