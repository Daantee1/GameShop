import SidebarMenu from "../SidebarMenu"


const simulation = () => {
  return (
    <div className="flex flex-col lg:flex-row">
    <div className="lg:block hidden" >
        <SidebarMenu />
      </div>
    </div>
  )
}

export default simulation