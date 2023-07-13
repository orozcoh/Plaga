import PropTypes from "prop-types";

export const About = ({ className }) => {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        justifyContent: "space-around",
        textAlign: "justify",
        flexWrap: "wrap",
      }}
    >
      <div
        style={{
          padding: "20px 10px 20px 10px",
          maxWidth: "500px",
        }}
      >
        <img
          style={{ maxWidth: "100%", height: "auto" }}
          src="Javi_About.jpg"
        />
      </div>
      <div
        style={{
          minWidth: "250px",
          maxWidth: "500px",
          color: "white",
          padding: "20px 10px 20px 10px",
        }}
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          erat eu augue hendrerit condimentum. Fusce scelerisque lorem nec
          aliquam gravida. Sed vestibulum libero turpis, eu pellentesque elit
          consequat ac. Donec a felis tortor. Nam sodales est nulla, quis cursus
          nulla fermentum semper. Sed non hendrerit ipsum, nec laoreet augue.
          Nulla facilisi. Nunc rutrum purus purus, quis ornare libero maximus
          ac. Nullam imperdiet vitae tellus at rhoncus.
        </p>
        <p>
          Aenean interdum libero ipsum, id tempus ex vehicula in. Aenean
          vehicula tincidunt venenatis. Nulla facilisi. Mauris interdum ut dui
          tincidunt tincidunt. Nam condimentum porta imperdiet. Ut a efficitur
          mi. Proin elit velit, imperdiet et consectetur sit amet, feugiat quis
          nisl. Suspendisse at dui dapibus lacus pretium vehicula ut vitae
          mauris. Suspendisse potenti. Cras odio lectus, commodo at pulvinar
          vitae, iaculis ut dui. Cras pellentesque, erat vitae aliquet sodales,
          ipsum nisl cursus tortor, eu dapibus lectus purus id justo. Fusce
          dignissim malesuada felis, et euismod erat sagittis eu. Vivamus ut
          imperdiet tellus. Etiam posuere justo eu erat malesuada, quis dapibus
          est vehicula. Cras nunc augue, elementum nec elit tincidunt, dictum
          porttitor justo. Vestibulum ante ipsum primis in faucibus orci luctus
          et ultrices posuere cubilia curae; Quisque pretium justo turpis, sit
          amet interdum odio facilisis non. Proin mattis nec turpis ac
          consectetur. Curabitur id rhoncus risus. Phasellus a enim eget nulla
          laoreet egestas. Praesent venenatis volutpat nulla, sit amet cursus
          lacus lobortis id. Mauris finibus finibus felis ut feugiat. Sed ut
          egestas lectus. Nam feugiat felis ut vehicula posuere.
        </p>
      </div>
    </div>
  );
};

About.propTypes = {
  className: PropTypes.string,
};
