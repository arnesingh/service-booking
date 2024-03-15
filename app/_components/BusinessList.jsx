import { Image } from "next/image";
import React from "react";

function BusinessList({ title, businessList }) {
  return (
    <div className="mt-5">
      <h2 className="font-bold text-[22px] ">{title}</h2>
      <div>
        {businessList.map((business, index) => (
          <div key={index} className="">
            <Image
              src={business.images[0].url}
              alt={business.name}
              height={500}
              width={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BusinessList;
