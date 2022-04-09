const Navbar = (props) => {
    const { username } = props;
    return (
        <div>
            Netflix <p>{username}</p>
            <ul>
                <li>Home</li>
                <li>My List</li>
            </ul>
            <nav>
                <div>
                    <button>
                        <p>{username}</p>
                        <div>
                            <a>Sign out</a>
                        </div>
                    </button>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
