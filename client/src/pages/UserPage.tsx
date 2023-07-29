import Button from "@mui/material/Button";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";
import Orders from './Orders'

export default function UserPage() {

    const userInformation =useSelector((state:RootState)=>state.user.user)

    if(!userInformation){
     return <p>no data</p>;
    }

  return (
    <div className="h-screen">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          shoping details
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          confirm personal details and let us know
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Full name
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              Margot Foster
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              category
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              foods
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Email address
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {userInformation && userInformation.email}
            </dd>
          </div>
        </dl>
      </div>
      <Button variant="contained" sx={{ marginTop: "30px" }}>
        <Link to="/update">Update information</Link>
      </Button>

      <div className="m-8">
        <Orders />
      </div>
    </div>
  );
}
