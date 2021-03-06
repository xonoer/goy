import React, { PropTypes } from 'react';

class MainLayout extends React.Component {
  renderAuthInfo() {
    const { user } = this.props;

    if (user._id) {
      return (
        <div className="auth-info">
          <img
            role="presentation"
            className="picture"
            src={user.profile.picture}
            onClick={this.props.logout}
          />

          <span>{user.profile.name}</span>
        </div>
      );
    }

    return (
      <div className="auth-info">
        <a className="facebook-login" onClick={this.props.loginWithFacebook}>
          Facebook login
        </a>
      </div>
    );
  }

  render() {
    return (
      <div className="container"> 
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <a className="logo" href="/"></a>
            <p className="title">
              {this.props.title}
            </p>
            {this.renderAuthInfo()}
          </div>
        </nav>

        <div className="content">
        <div className="body">
      <div className="container">
        <div className="featured-boxes">
<div className="row">
          {this.props.content}
</div>
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

MainLayout.propTypes = {
  logout: PropTypes.func,
  loginWithFacebook: PropTypes.func,
  user: PropTypes.object,
  content: PropTypes.object,
  title: PropTypes.string,
};

export default MainLayout;
