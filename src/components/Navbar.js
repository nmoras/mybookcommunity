import React, {useEffect, useState} from 'react'
import Link from 'next/link'

const Navbar = () => {
    const [isShown, setShown] = useState(false);
    let showClass = !isShown ? `collapse navbar-collapse`: `collapse navbar-collapse show`;

    // let id = localStorage.id
    // let userName = localStorage.name;
    // let email = localStorage.email;
    // let user = localStorage.type

    //adding localstorage access 03/02
    const [id, setId] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [user, setUser] = useState('')
    
    useEffect( () => {
        if(localStorage.getItem("username") !== null){
            const id = localStorage.getItem(id)
            setId(id? JSON.parse(id) : '')
            const userName = localStorage.getItem(userName)
            setUserName(userName? JSON.parse(userName) : '')
        } else {
            setId('')
        }
   

    })

    //---local stoarge ends here----


    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                {/* <Link to="/" className="navbar-brand" href="#">Emily <i class="fas fa-book-reader"></i> Dickinson</Link> */}
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={()=>setShown(!isShown)}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                 <div className={showClass} id="navbarNav"> 
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link href="/" className="nav-link" >Home</Link>
                    </li>
                    { !id ?
                    <li className="nav-item">
                        <Link href="/registration" className="nav-link" >Register</Link>
                    </li> : ''}
                    {/* { email == "april@test.com" ? */}
                    { user == "admin" ?
                    <li className="nav-item">
                        <Link href="/admin" className="nav-link" >Admin</Link>
                    </li> : ''}
                    { !id ? 
                    <li className="nav-item">
                    <Link href="/login" className="nav-link" >Login</Link>
                    </li> : 
                    <li className="nav-item">
                    <Link href={`/user/${id}`} className="nav-link" >Dashboard</Link>
                    </li>}    

                    {id ? 
                    <li className="nav-item">
                    <Link href="/logout" className="nav-link" >Logout</Link>
                    </li>: ''}                        
                    </ul>
                </div>
            </nav>

            <div class="container-fluid">
                <div class="row">
                    <div class="col-lg-12 mx-auto" style={{height: "100px", backgroundColor: "#9f6934", padding: "0", margin: "0"}}>
                        <h2 style={{paddingTop: "10px", paddingLeft: "15px", color:"white", fontSize:"50px", textAlign: "center"}}>Book World</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
