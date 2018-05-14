import React, { Component } from 'react';
import './DetailCard.css';

import Card from 'material-ui/Card';
import Typography from 'material-ui/Typography';

export class DetailCard extends Component {

    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (
            <div>
                <Card className="detail-card">
                    {this.props.children}
                    {this.props.detail && <div className="more-info" > <a className="more-info-link" onClick={this.props.onClick}> {this.props.detailText} </a> </div>}
                </Card>
            </div>
        );
    }
}