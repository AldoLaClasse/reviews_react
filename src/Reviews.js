import Review from './Review'

const Reviews = () => {

    return (
        <div className="main">
            <h3>Bonjour je suis le composant parent</h3>
            <div>
                <Review />
            </div>
        </div>
    )

}

export default Reviews;