import { Link } from "react-router-dom";

//images
import { profileImage } from "../../../assets";

//icons
import { AddIcon } from "../../Icons/SvgIcons";

const Row = ({ head, body, image, buttonName, cardType }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        {cardType !== "trending" && (
          <img
            className="rounded-full mr-3"
            style={{ width: "40px", height: "40px" }}
            src={image}
          />
        )}
        <div className="flex flex-col justify-between items-start">
          <span
            className="text-base font-semibold uppercase"
            style={{ color: "#5D5F63" }}
          >
            {head}
          </span>
          {cardType !== "friend-suggestion" && (
            <span className="text-sm" style={{ color: "#AAAAAA" }}>
              {body}
            </span>
          )}
        </div>
      </div>
      <button
        className="flex justify-between items-center"
        style={{
          border: "1px solid #AAAAAA",
          borderRadius: "10px",
          padding: "6px 8px",
        }}
      >
        <div className="mr-3">
          <AddIcon />
        </div>
        <span className="text-base" style={{ color: "#AAAAAA" }}>
          {buttonName}
        </span>
      </button>
    </div>
  );
};

function CustomCard({ name, icon, cardType, buttonName }) {
  return (
    <div
      className="flex flex-col"
      style={{
        background: "white",
        marginTop: "2rem",
        width: "100%",
        borderRadius: "20px",
        boxShadow: "0px 10px 20px rgba(112, 144, 176, 0.12)",
        padding: "26px 30px",
      }}
    >
      <div className="flex justify-between">
        <span
          className="self-start text-base flex"
          style={{ fontWeight: "bold" }}
        >
          <div className="mr-3">{icon}</div>
          {name}
        </span>
        <span className="text-base cursor-pointer" style={{ color: "#4385F5" }}>
          See more
        </span>
      </div>
      <hr
        style={{
          backgroundColor: "#C5C7C8",
          width: "100%",
          margin: "1rem 0rem",
        }}
      />
      <div className="pb-6">
        <Row
          cardType={cardType}
          image={profileImage}
          head="#ukraine"
          body="345 post"
          buttonName={buttonName}
        />
      </div>
      <Row
        cardType={cardType}
        image={profileImage}
        head="#metaverse"
        body="200 post"
        buttonName={buttonName}
      />
    </div>
  );
}

export default CustomCard;
