import "./CardArticle.css"
import { Button } from 'semantic-ui-react';


const SeeMoreButton = ({ text, color }) => (
  <div className="see-more-container">
    <Button color={color}>{text}</Button>
  </div>
);

export default SeeMoreButton;