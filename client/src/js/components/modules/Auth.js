class Auth {
  // Authenticate a URLSearchParams. Save a token string in localStorage
  static authenticateUser(token) {
    localStorage.setItem("token", token);
  }

  // Store User Role
  static storeUserRole(role) {
    localStorage.setItem("userRole", role);
  }

  // Store userID as a string in localStorage
  static storeUserID(id) {
    localStorage.setItem("userID", id);
  }

  // Store userName as a string in localStorage
  static storeUserName(name) {
    localStorage.setItem("userName", name);
  }

  // Check if user is authenticated - check for token in localStorage
  static isUserAuthenticated() {
    return localStorage.getItem("token") !== null;
  }

  // Deauthenticate user - remove token from localStorage
  static deauthenticateUser() {
    localStorage.removeItem("token");
    localStorage.removeItem("userID");
    localStorage.removeItem("userRole");
  }

  // Get User Role
  static getUserRole() {
    return localStorage.getItem("userRole");
  }

  // Get a token value
  static getToken() {
    return localStorage.getItem("token");
  }

  // Get a userID value
  static getUserID() {
    return localStorage.getItem("userID");
  }
  // Get a userName
  static getUserName() {
    return localStorage.getItem("userName");
  }
}

export default Auth;
