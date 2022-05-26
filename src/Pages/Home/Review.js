import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Review = ({ review, setReviewProduct }) => {
    const { ratings, product, description } = review;

    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);

    setReviewProduct(review);

    return (
        <div className='grid grid-cols-1'>
            <div className="card bg-base-100 shadow-xl image-full">
                <figure><img src="https://i.ibb.co/jG3fPPq/njOwkLa.jpg" alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white">Ratings: {ratings}/5 </h2>
                    <p>{description}</p>
                    <input type="range" className="range range-secondary input-bordered border" min="1" max="5" value={ratings} />
                    <div className="w-full flex justify-between text-xs px-2 mb-5  font-bold">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>4</span>
                        <span>5</span>
                    </div>

                    {!admin &&
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary" >
                                <Link to='/dashboard/review' >Make a Review</Link>
                            </button>
                        </div>
                    }
                    {!user &&
                        <div className="card-actions justify-end">
                            <button className="btn btn-sm btn-primary" disabled>
                                <Link to='/dashboard/review' >Make a Review</Link>
                            </button>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Review;