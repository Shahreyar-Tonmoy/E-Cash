import React from 'react';
import { useQuery } from "@tanstack/react-query";

const AllAgents = () => {
  const { isPending, isError, error, data } = useQuery({
    queryKey: ["data"],
    queryFn: async () => {
      const res = await fetch(`https://e-cash-server-mongoose.vercel.app/api/allagent`);
      return res.json();
    },
  });

  console.log(data);

  // Loading state
  if (isPending) {
    return <>Loading...</>;
  }

  // Error state
  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <div className="flex flex-col justify-center h-full mx-10">
        <div className="w-full mx-auto rounded-sm border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">All Users</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              {/* Check if data is an array before mapping */}
              {Array.isArray(data) && data.length > 0 ? (
                <table className="table-auto w-full">
                  <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                    <tr>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Name</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Email</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Phone Number</div>
                      </th>
                      <th className="p-2 whitespace-nowrap">
                        <div className="font-semibold text-left">Balance</div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="text-sm divide-y divide-gray-100">
                    {data.map((userData, index) => (
                      <tr key={index}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="font-medium text-gray-800">{userData?.name}</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{userData?.email}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">{userData?.phoneNumber}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">{userData?.amount}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              ) : (
                <div>No data available</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllAgents;
