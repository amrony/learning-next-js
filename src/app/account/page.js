import { redirect } from "next/navigation";


const Accounts = () => {

  // assume that profile info is null
  const userProfileInfo = null;

  if(userProfileInfo === null) redirect('cart?search=product1');


  return (
    <div> Account page</div>
  )
}

export default Accounts;