import { Link } from "react-router-dom"

export default function NavBar( {user} ) {
    return (
        <nav className="flex justify-around">
            <Link to="/">
                <div className="py-4 w-[100px] m-4 rounded-full bg-slate-500 hover:bg-slate-600">MOVIES</div>
            </Link>
            <Link to="/actors">
                <div className="py-4 w-[100px] m-4 rounded-full bg-slate-500 hover:bg-slate-600">ACTORS</div>
            </Link>
            <div className="py-4 w-[100px] m-4 rounded-full bg-slate-500">
                <h2>{user.toUpperCase()}</h2>
            </div>


    </nav>
    );
  }