import "./index.scss";
import Section from "components/section";
import { product1, product2 } from "common/common-imports";
import { Fade } from "react-reveal";

function SectionProducts() {
  const data = [
    {
      icon: product1,
      name: "F-25",
      processingCapacity: "25 Kgs",
      dimensions: "5.5 × 3 × 3",
      powerRating: "1.725 KW",
    },
    {
      icon: product1,
      name: "F-75",
      processingCapacity: "75 Kgs",
      dimensions: "7 × 4 × 4",
      powerRating: "3.5 KW",
    },
    {
      icon: product1,
      name: "F-125",
      processingCapacity: "125 Kgs",
      dimensions: "7.5×4.5×4.5",
      powerRating: "5.37 KW",
    },
    {
      icon: product1,
      name: "F-250",
      processingCapacity: "250 Kgs",
      dimensions: "9 × 5.5 × 5.5",
      powerRating: "11 KW",
    },
    {
      icon: product2,
      name: "F-500",
      processingCapacity: "500 Kgs",
      dimensions: "12 × 6.5 × 7.5",
      powerRating: "17.62 KW",
    },
    {
      icon: product2,
      name: "F-700",
      processingCapacity: "700 Kgs",
      dimensions: "13.5 × 7.5 × 8.5",
      powerRating: "27.25 KW",
    },
    {
      icon: product2,
      name: "F-1250",
      processingCapacity: "1250 Kgs",
      dimensions: "16 × 8 × 9.5",
      powerRating: "41 KW",
    },
  ];

  return (
    <Section id={"section-products"} className="section-products-main" center>
      <Fade left>
        <p className="title">Products</p>
      </Fade>

      <div className="container">
        {data &&
          data.map((obj) => (
            <Fade cascade left>
              <div className="product-container">
                <div className="left-section">
                  <img
                    className="img-product"
                    src={obj.icon}
                    alt="product-icon"
                  />
                </div>
                <div className="right-section">
                  <p className="product-name">{obj.name}</p>
                  <p className="product-capacity">
                    Processing Capacity : {obj.processingCapacity}
                  </p>
                  <p className="product-dimensions">
                    Dimensions (ft): {obj.dimensions}
                  </p>
                  <p className="product-powerRating">
                    Power rating: {obj.powerRating}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
      </div>
    </Section>
  );
}

export default SectionProducts;
