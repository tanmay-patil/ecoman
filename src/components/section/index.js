import "./index.scss";

function Section({
  children,
  center = false,
  column = false,
  row = false,
  className = "",
  flex,
  spaceBetween = false,
  id,
}) {
  const styles = {};
  const className_ = className ? `section-main ${className}` : "section-main";

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
    <section id={id}>
      <div style={{ ...styles }} className={className_}>
        {children}
      </div>
    </section>
  );
}

export default Section;
