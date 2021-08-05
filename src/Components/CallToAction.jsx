import ShopNowCard from "./ShopNowCard";

const CallToAction = () => {
  return (
    <div className="order-section">
      <h1>2021 top Collections</h1>
      <div className="container">
        <ShopNowCard /> <ShopNowCard />
      </div>
    </div>
  );
};

export default CallToAction;
