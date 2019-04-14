import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {addUrlFeed, addUrlFeedList, addUrlBodyList, deleteUrlFeed} from '../actions/index'; 
import {connect} from 'react-redux';
import '../styles/Sidebar.css';
import {withRouter} from 'react-router-dom'

class Sidebar extends Component {
    
    render(){
        return (
            <div className="col-lg-4 col-md-4 col-xs-4 col-sm-4" style={{paddingTop:'4%'}}> 
                <div className="row">
                    <div className="col-lg-10">
                        <div className="input-group">
                            <input type="text" 
                                   className="form-control" 
                                   placeholder="Search for..."
                                   onChange={(event) => this.props.addUrlFeed(event.target.value)}/>
                            <span className="input-group-btn">
                                <button className="btn btn-default" 
                                        type="button"
                                        onClick={() => this.props.addUrlFeedList(this.props.feed,this.props.history)}>Go!</button>
                            </span>
                        </div> 
                    </div>
                </div>

                    
                    <div className="row feedStyle" style={{paddingTop:'4%'}}>
                        <div className="col-lg-10 col-sm-10 col-xs-10 col-md-10">
                            {this.props.feedList !== undefined && this.props.feedList.length > 0 &&
                            this.props.feedList.map((feedUrl, index) => 
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                        <NavLink to={'/' + index}>    
                                        {feedUrl}
                                        </NavLink>
                                            <span className="glyphicon glyphicon-remove" 
                                                  style={{float:'right'}}
                                                onClick={() => this.props.deleteUrlFeed(index)}/> 
                                        </div>	
                                    </div>
                                )}
                        </div>
                    </div>    
            </div>
        )
    }
}
const mapStateToProps = (state) => ({ feed: state.feed, feedList:state.feedList, feedBody:state.feedBody})
const mapDispatchToProps = {addUrlFeed: addUrlFeed,addUrlFeedList:addUrlFeedList, deleteUrlFeed ,addUrlBodyList:addUrlBodyList}
Sidebar = connect(mapStateToProps,mapDispatchToProps)(Sidebar)
export default withRouter(Sidebar);