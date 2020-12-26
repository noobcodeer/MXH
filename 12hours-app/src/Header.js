/*rfce */
import React from 'react' ;
import "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';

function Header() {
    return (
        <div className="header"> 
            <IconButton /*icon profile muon lay phai import 2 thu vien icon va core */>
                <PersonIcon fontSize="large" className="header_icon"/> 
            </IconButton>
            
            <img className="header_logo" //logo main
            src="https://image.similarpng.com/very-thumbnail/2020/04/Instagram-logo-social-media-3d-png.png"
            alt=""
            />
            <IconButton>
                <ForumIcon fontSize="large" className="header_icon"/>
            </IconButton>
        </div>
    )
}

export default Header
