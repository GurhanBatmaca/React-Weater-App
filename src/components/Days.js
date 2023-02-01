import { UseWeater } from "../context/WeaterContext"

const Days = () => {

    const { days, setDays } = UseWeater();

    // console.log(days[0].hour);

  return (
    <div>Days</div>
  )
}

export default Days