import AppBarProps from "../../components/appbar/AppBar"
import DescriptionProject from "../../components/descriptionEdit/DescriptionProject"
import Navtabs from "../../components/navtabs/Navtabs"
import './scss/edit.scss'

const Edit = () => {
  return (
    <div className="edit">
    <AppBarProps />
    <div  >
        <Navtabs />
    </div>
    <DescriptionProject />
    </div>
  )
}

export default Edit