import './index.css'
const EachRetreats = (props) => {
    const {retreatData} = props
    const {id, title, description, date, location, price, image} = retreatData
    const newDate = (new Date(date)).toDateString() 
    return(
        <li className="retreat-container">
            <img src={image} className='retreate-image'/>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>Date : {newDate}</p>
            <p>Location : {location}</p>
            <p>Price : Rs.{price}</p>

        </li>
    )
}

export default EachRetreats