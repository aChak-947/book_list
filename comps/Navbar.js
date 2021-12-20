import Link from 'next/link';

const Navbar = () => {
    return (
      <nav>
        <div className="logo">
          <h1>Book List</h1>
        </div>
        <Link href="/"><a>List All</a></Link>
      </nav>
  );
  }
   
  export default Navbar;