import PropTypes from "prop-types";

export default function Container({ Children }) {
  return <div className="container">{Children} </div>;
}

Container.propTypes = {
  Children: PropTypes.node,
};
