import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

const Users = () => {
  const FetchUsers = () => {
    return axios.get("http://localhost:3100/users");
  };

  const { isLoading, data,isError, error } = useQuery("uers", FetchUsers,{
    staleTime:30000,
    refetchOnMount:true
  });

  if (isLoading) {
    return (
      <>
        <h1>Loading....</h1>
      </>
    );
  }
  if (isError) {
    return (
      <>
        <h1>{error.message}</h1>
      </>
    );
  }
  return (
    <div>
      <h1>Users</h1>
      {data?.data?.map((eachUser, index) => (
        <div key={index}>
          <h1>
            {eachUser?.id} {eachUser?.name}
          </h1>
        </div>
      ))}
    </div>
  );
};

export default Users;
