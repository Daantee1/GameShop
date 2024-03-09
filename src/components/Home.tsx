import CommonGames from "./CommonGames";
import SidebarMenu from "./SidebarMenu";



const Home = () => {


  
  return (
    <div className="flex flex-col lg:flex-row">
      <div className="lg:block hidden" >
        <SidebarMenu />
      </div>
      <div className="flex w-full ">
        <CommonGames />
      </div>
    </div>
  );
};

export default Home;