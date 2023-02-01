import { NavLink, useRouteError } from "react-router-dom"


const MainErrors = () => {
    const error = useRouteError();
    console.log(error)
  return (
    <div>
        <div>Error</div>
        <div>{error.data}</div>
    </div>
  )
}

export default MainErrors

// düzenle