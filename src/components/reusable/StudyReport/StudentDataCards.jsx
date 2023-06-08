import React from "react";
import RActivity from "../../../assets/RecentActivity.png";
import TContent from "../../../assets/TotalContent.png";
import TLearners from "../../../assets/TotalLearners.png";

function studentDataCards() {
  return (
    <div>
      <section className="grid grid-cols-3 gap-2">
        <div>
          <img
            className="w-4/4 h-full"
            src={TContent}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-4/4 h-full"
            src={TLearners}
            alt=""
          />
        </div>
        <div>
          <img
            className="w-4/4"
            src={RActivity}
            alt=""
          />
        </div>
      </section>
    </div>
  );
}

export default studentDataCards;
