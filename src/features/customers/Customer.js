import { useSelector } from "react-redux";
function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  const nationalId = useSelector((store) => store.customer.nationalId);

  console.log(customer);
  return (
    <h2>
      👋 Welcome, {customer} with national ID: {nationalId}
    </h2>
  );
}

export default Customer;
