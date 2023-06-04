import {Link} from 'react-router-dom'
// Using the import below, we can call any exported function using: userService.someMethod()
import {logOut} from '../../utilities/users-service';
// We only need logOut, so we desctructure it (above)
export default function NavBar({user, setUser}) {
    // Add the following function
    function handleLogOut() {
    // Delegate to the users-service
    logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
    
    return (
        <>
        <nav>
            <Link to="/orders">Course List</Link>
            &nbsp; | &nbsp;
            <Link to="/orders/new">New Course</Link>
            &nbsp; | &nbsp;
            <span>Welcome, {user.name}</span>
            &nbsp; | &nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
        </nav>
        </>
    )
}