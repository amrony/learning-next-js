import Link from "next/link";


const NotFound = () => {
  return (
    <div>
        <h1>This page does not exist</h1>
        <Link href="/">Go back to home</Link>
    </div>
  )
}

export default NotFound;