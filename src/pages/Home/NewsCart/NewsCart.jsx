import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCart = ({ news }) => {
    const { _id, title, details, image_url, author } = news;
    const { name, published_date, img } = author;

    return (
        <Card className=" mb-4">
            <Card.Header>
                <Image style={{ width: '40px', height: '40px' }} src={img ? img : 'author img'} roundedCircle />
                <div>
                    <p>{name}</p>
                    
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
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCart;