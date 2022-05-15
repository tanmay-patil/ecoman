import "./index.scss";

function Section({
  children,
  center = false,
  column = false,
  row = false,
  className = "",
  flex,
  spaceBetween = false,
}) {
  const styles = {};
  const className_ = className ? `${className} section-main` : "section-main";

  if (flex || center) {
    styles.display = "flex";
    styles.justifyContent = center ? "center" : "start";
    styles.justifyContent = spaceBetween
      ? "space-between"
      : styles.justifyContent;
    styles.alignItems = "center";
    styles.flexDirection = column ? "column" : "row";
    styles.flexDirection = !row ? "column" : styles.flexDirection;
  }

  return (
    <div style={{ ...styles }} className={className_}>
      {children}
    </div>
  );
}

export default Section;
