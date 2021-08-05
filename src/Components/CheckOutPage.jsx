import FormComponent from "./FormComponent";
import PageTitle from "./PageTitle";
import PriceTable from "./PriceTable";

const CheckOutPage = () => {
  return (
    <div className="container">
      <PageTitle title="Check Out" />
      <div className="checkout_container">
        <PriceTable />
        <FormComponent />
      </div>
    </div>
  );
};

export default CheckOutPage;
