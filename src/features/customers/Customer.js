import { useSelector } from "react-redux";
function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  const nationalId = useSelector((store) => store.customer.nationalId);
  const createdAt = useSelector((state) => state.customer.createdAt); // Access createdAt from Redux state

  console.log(customer);
  return (
    <h2>
      👋 Welcome, {customer} with national ID: {nationalId} and created at:{" "}
      {createdAt.slice(0, 10)}
    </h2>
  );
}

export default Customer;
