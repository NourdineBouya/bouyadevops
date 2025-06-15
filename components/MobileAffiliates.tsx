"use client";

import React from "react";

const MobileAffiliates = ({ widgets }: { widgets: any[] }) => {
  return (
    <div className="lg:hidden bg-white rounded-lg shadow-md p-4 border mt-8">
      <h3 className="text-sm font-semibold text-gray-700 mb-3 text-center">Nos partenaires</h3>
      <div className="grid grid-cols-2 gap-3">
        {widgets.slice(0, 4).map((widget) => (
          <div
            key={widget._id}
            className={`bg-gradient-to-r ${
              widget.colorScheme === "orange"
                ? "from-orange-400 to-orange-600"
                : widget.colorScheme === "blue"
                ? "from-blue-500 to-blue-600"
                : "from-gray-500 to-gray-600"
            } rounded-lg p-3 text-white text-center cursor-pointer`}
            onClick={() => window.open(widget.affiliateLink, "_blank")}
          >
            <p className="text-xs font-medium">{widget.company}</p>
            <p className="text-sm font-bold">{widget.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileAffiliates;
