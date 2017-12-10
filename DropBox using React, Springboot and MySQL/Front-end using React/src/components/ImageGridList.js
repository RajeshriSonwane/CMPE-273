import React, {Component} from 'react';
import PropTypes from 'prop-types';


class ImageGridList extends Component {

    constructor(props) {
        super(props);
        this.state = {className: "glyphicon glyphicon-star-empty", password:"",message:""};

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        if(this.state.className === "glyphicon glyphicon-star-empty"){
            this.setState({className: "glyphicon glyphicon-star"});
        }
        else {
            this.setState({className: "glyphicon glyphicon-star-empty"});
        }
    }

    static propTypes = {
        classes: PropTypes.object.isRequired,
        images: PropTypes.array.isRequired
    };

    render(){
        const classes = this.props;
        var myStyle = {
            textAlign:'left',
            paddingBottom:25
        };
        var shareBtn ={
            borderRadius: 6,
            align:'right',
            paddingBottom:10,
            paddingTop:10
        };
        var starSty = {
            paddingLeft:20
        };
        var linkSty = {
            color:'Black'
        };


        return (
            <div className={classes.root}>
                    {this.props.images.map(tile => (
                        <div key={tile.img} cols={tile.cols || 1} style={myStyle}>
                            <div className='col-md-10'>
                                <a href={'http://localhost:3001/uploads/'+tile.img} alt={'myimage'} style={linkSty}> {tile.img} </a>
                                <a href='#'><span style={starSty} className={this.state.className} onClick={this.handleClick}/></a>
                            </div>
                            <div className='col-md-2'>
                              
                                <button type="button" className="btn btn-primary" id="myBtn">Share</button>

                                <div className="modal fade" id="myModal" role="dialog">
                                    <div className="modal-dialog">

                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                <h4 className="modal-title">New Folder</h4>
                                            </div>
                                            <div className="modal-body">
                                                <form role="form">
                                                    <div className="form-group">
                                                        <input type="text" className="form-control" id="folder" placeholder="folder name"/>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="submit" className="btn btn-primary btn-default pull-left" data-dismiss="modal">create folder</button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        );
    }
}

export default ImageGridList;
