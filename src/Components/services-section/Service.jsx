import React, { useState } from "react";
import { List } from "../ui/List";
import { IconDeliveryTruck, IconGift, IconLeaf } from "../../assets/icons/InterfaceIcons";

const SERVICE_ITEMS = [
  {
    id: "1",
    Icon: <IconDeliveryTruck size="34" />,
    title: "FAST GROCERY DELIVERY",
    Desc: "Get your groceries delivered within hours",
  },
  {
    id: "2",
    Icon: <IconLeaf size="34" />,
    title: "100% ORGANIC PRODUCTS",
    Desc: "Fresh & chemical-free groceries everyday",
  },
  {
    id: "3",
    Icon: <IconGift size="34" />,
    title: "EXCLUSIVE MEMBER DEALS",
    Desc: "Save big with weekly offers & discounts",
  },
];
export const Service = () => {
  const [serviceData] = useState(SERVICE_ITEMS);
  return (
    <div className="w-full px-4 py-10 bg-green-50">
      <List
        className="flex flex-wrap justify-center gap-x-12 gap-y-10"
        uniqueKey="id"
        data={serviceData}
        render={(item) => (
          <div className="flex flex-col items-center text-center space-y-4 w-[250px]">
            {/* Icon wrapper */}
            <div className="border-4 border-yellow-200 bg-yellow-500 shadow-md flex items-center justify-center w-20 h-20 rounded-full">
              {item.Icon}
            </div>

            {/* Text */}
            <div>
              <h5 className="text-sm font-semibold text-gray-800">
                {item.title}
              </h5>
              <p className="text-xs text-gray-600">{item.Desc}</p>
            </div>
          </div>
        )}
      />
    </div>
  );
};
