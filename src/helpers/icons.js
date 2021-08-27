

import {
  faTrash, 
  faSignOutAlt, 
  faEdit,
  faMinusCircle,
  faSpinner,
  faPlusCircle,
  faUserCircle,
  faPhone,
  faAddressBook
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core"


const Icons = () => {

return library.add(faTrash, faSignOutAlt, faEdit, faMinusCircle, faSpinner, faPlusCircle, faUserCircle, faPhone, faAddressBook);}

export default Icons;