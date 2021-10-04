import { useState } from 'react'
import { data } from './data'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Review = () => {

    const [index, setIndex] = useState(0)
    const {id, name, title, desc, img} = data[index]

    // const changeIndex = (sens) => {

    //      sens === '+' ? setIndex(index+1) : setIndex(index-1)
    //      index === -1 ? setIndex(data.length-1) : setIndex(index)
    //      index === data.length ? setIndex(0) : setIndex(index)

    //  }

    const avancer = () => {
        setIndex((index+1)%data.length)
    }

    const reculer = () => {
        setIndex(((index-1%data.length)+data.length)%data.length)
    }

    const hasard = () => {
        setIndex(Math.floor(Math.random()*data.length))
    }

    return (

        <article className="container" key={id}>
            <img src={img} classname="image" />
            <span className="quote">
                <FaQuoteLeft />
            </span>
            <h3>{name}</h3>
            <h5>{title.toUpperCase}</h5>
            <p>{desc}</p>
            
            <div className="nav">
                <button type="button" className="prev-btn" onClick={reculer}>
                    <FaChevronLeft />

                </button>

                <button type="button" className="next-btn" onClick={reculer}>
                    <FaChevronRight />
                    
                </button>

            </div>

            <button type="button" className="surprise" onClick={hasard}>
                    Au hasard          
            </button>

        </article>

    )

}

export default Review;