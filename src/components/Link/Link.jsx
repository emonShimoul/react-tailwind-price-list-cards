// eslint-disable-next-line react/prop-types
const Link = ({ route }) => {
  return (
    <li className="mr-12 hover:bg-purple-600">
      {/* eslint-disable-next-line react/prop-types */}
      <a href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;
