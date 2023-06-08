
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    const studentItems = <>
    <li><Link>My Selected Classes</Link></li>
    <li><Link>My Enrolled Classes</Link></li>
    <li><Link>My Payment History</Link></li>
    </>
    const instructorItems = <>
    <li><Link to="dashboard/addClass">Add A Class</Link></li>
    <li><Link>My Classes</Link></li>
    </>
    const AdminItems = <>
    <li><Link to="dashboard/manageUser">Manage User</Link></li>
    <li><Link>Manage Classes</Link></li>
    
    </>
    return (
        <div className='mx-auto container'>
            <Navbar></Navbar>
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    <Outlet></Outlet>
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                      {studentItems}
                      {AdminItems}
                      {instructorItems}
                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;