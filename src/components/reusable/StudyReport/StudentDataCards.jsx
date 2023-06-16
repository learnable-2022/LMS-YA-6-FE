import React from "react";
import RActivity from "../../../assets/RecentActivity.png";
import TContent from "../../../assets/TotalContent.png";
import TLearners from "../../../assets/TotalLearners.png";

function studentDataCards() {
  return (
    <>
      <section className="grid grid-cols-2 gap-2 md:grid-cols-3 h-fit ">
        <div>
          <img
            className=" h-4/6"
            src={TContent}
            alt=""
          />
        </div>
        <div>
          <img
            className=" h-4/6"
            src={TLearners}
            alt=""
          />
        </div>
        <div>
          <img
            className="h-5/6"
            src={RActivity}
            alt=""
          />
        </div>
      </section>
    </>
  );
}

export default studentDataCards;
