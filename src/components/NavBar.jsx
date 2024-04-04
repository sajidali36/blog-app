import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import { Link } from 'react-router-dom'
import './navbar.css';

import SideNav, {
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <SideNav expanded={this.state.isVisible} className="sidebar">
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText><Link to="/"  className="text-decoration-none text-white">Home</Link></NavText>
          </NavItem>
          <NavItem eventKey="createpost">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText><Link to="/postsform"  className="text-decoration-none text-white">Create Post</Link></NavText>
          </NavItem>
          <NavItem eventKey="userposts">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText><Link to="/posts"  className="text-decoration-none text-white">User Posts</Link></NavText>
          </NavItem>
          <NavItem eventKey="placed orders">
            <NavIcon>
              <i
                className="fa fa-fw fa-line-chart"
                style={{ fontSize: "1.75em" }}
              />
            </NavIcon>
            <NavText><Link to="/allposts" className="text-decoration-none text-white">All Posts</Link></NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;
