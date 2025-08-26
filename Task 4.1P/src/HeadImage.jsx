import { faker } from '@faker-js/faker';

function HeadImage() {
  return (
    <div className="head-image">
      <img src={faker.image.avatar()} alt="Head Avatar" style={{ width: "100%", height: "600px"}}/>
    </div>
  );
}
export default HeadImage;