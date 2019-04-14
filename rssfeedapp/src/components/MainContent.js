import React, {Component} from 'react';
import {addUrlFeed, addUrlBodyList} from '../actions/index';
import {connect} from 'react-redux';

class MainContent extends Component {
    componentDidMount = () => {
        if(this.props.match.params.id && this.props.feedList.length > 0 ){
            this.props.addUrlBodyList(this.props.feedList[this.props.match.params.id])
        }
    }
    componentWillMount = () => {
        if(this.props.match.params.id && this.props.feedList.length > 0){
            this.props.addUrlBodyList(this.props.feedList[this.props.match.params.id])
        }
    }
    render(){
        return (
        <div className="col-lg-8 col-md-8 col-xs-8 col-sm-8" style={{paddingTop:'4%'}}>
            {this.props.feedBody !== undefined && this.props.feedBody.length > 1 && this.props.feedBody.map((feed) =>(            
            <div className="card">
            <div className="card-header">
              {feed.title} - {feed.pubDate}
            </div>
            <div className="card-body">
                <p className="card-text">{feed.content}</p>
            </div>
          </div>
          ))}
        </div>
    )
}
}

const mapStateToProps = (state) => ({ feed: state.feed, feedList: state.feedList, feedBody:state.feedBody})
const mapDispatchToProps = {addUrlFeed: addUrlFeed, addUrlBodyList:addUrlBodyList}
MainContent = connect(mapStateToProps,mapDispatchToProps)(MainContent)
export default MainContent;