import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
//
import { FaEye, FaRegBookmark, FaRegStar, FaShareAlt, FaStar } from 'react-icons/fa'
import Rating from 'react-rating';
const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author, total_view, rating } = news;
    const { name, published_date, img } = author;

    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{ width: '40px', height: '40px' }} src={img ? img : 'author img'} roundedCircle />
                <div className='ps-2 flex-grow-1'>
                    <p className='mb-0'>{name}</p>
                    <p><small>{moment(author?.published_date).format('D-MM-YYYY')}</small></p>
                </div>
                <div>
                    <FaRegBookmark /> <FaShareAlt />
                </div>
            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text>
                    {
                        details.length < 250 ?
                            <>{details}</>
                            :
                            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`} >Read more</Link></>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted d-flex">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={rating.number}
                        readonly
                        emptySymbol={<FaRegStar/>}
                        placeholderSymbol={<FaStar className='text-warning'/>}
                        fullSymbol={<FaStar/>} 
                    />
                    {/* <Rating/> */}
                    <span>{rating.number}</span>
                </div>
                <div>
                    <FaEye /> {total_view}
                </div>
            </Card.Footer>
        </Card>
    );
};

export default NewsCart;