import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxios from "../../hooks/useAxios";
import RoomsCard from "../../components/RoomsCard/RoomsCard";
import loader from "../../assets/loader- 1699173093200.json";
import Lottie from "lottie-react";

import {Helmet} from "react-helmet";

const Rooms = () => {
  const axios = useAxios();
  const [filter, setFilter] = useState("");

  
  
  const getRooms = async () => {
    const res = await axios.get(`/rooms?sortField=price&sortOrder=${filter}`);
    return res;
  };

  const { data, isLoading, refetch, isFetching } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  useEffect(() => {
    refetch();
  }, [filter]);

  if (isLoading) {
    return (
      <Lottie
        className=" max-h-screen  bg-transparent"
        animationData={loader}
      ></Lottie>
    );
  }
  

 

  return (
    <div className=" bg-bg-7 bg-contain">
      <Helmet>
        <title>Rooms</title>
        <meta name="description" content="Default description for your pages" />
        {/* Other common head elements */}
      </Helmet>
      <div className="  md:w-[1700px] mx-auto my-6 font-cinzel ">
        <h2 className="  text-white border-l-8 pl-5 border-red-800 md:text-6xl font-bold my-10">
          Our best Rooms for You
        </h2>
        <h2 className=" text-white">Sort By Price</h2>

        <select
          className="select select-success md:w-[7vw] "
          onChange={(e) => setFilter(e.target.value)}
          name="order"
          id=""
        >
          <option value="">All</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[1750px] mx-auto w-full p-5 ">
        {data?.data?.map((items) => (
          <RoomsCard key={items._id} items={items}></RoomsCard>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
