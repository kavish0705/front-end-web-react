import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {
  render() {
    const commentList = this.props.dish.comments.map((item) => (
      <li>
        {item.comment}
        <br/><br/>
        -- {item.author}, {item.date}
        <br/><br/>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <Card>
            <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
            <CardBody>
              <CardTitle>{this.props.dish.name}</CardTitle>
              <CardText>{this.props.dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-12 col-md-5 m-1">
          <ul>
            <CardTitle><h4>Comments</h4></CardTitle>
            {commentList}
          </ul>
        </div>
      </div>
    );
  }
}

export default DishDetail;
