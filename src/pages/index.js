import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  let location = useLocation();
  const [ walkResult, setWalkResult ] = useState([])
  const [ totalMessages, setTotalMessages ] = useState( '' )
  const[ lastName, setLastName ] = useState ('')
  const[ lastUpdated, setLastUpdated] = useState('')
  // console.log(location)

  const loadPage = async () => {
      const apiGetWalk = await fetch('/api/walkdata').then( result => result.json() )
      console.log('apigetwalk is', apiGetWalk)
      if (apiGetWalk.length == 0){
          setLastName('');
          setLastUpdated('')
      } else {
              apiGetWalk.forEach(element => { 
                  element.createdAt = new Date(element.createdAt).toString().substring(4, 15)   
                  element.updatedAt = new Date(element.updatedAt).toString().substring(4, 15) 
              });
              let total = 0;
              apiGetWalk.forEach(element => { 
                  total = total + element.userReply.length;
              });
              setWalkResult( apiGetWalk);
              setTotalMessages(total);
              setLastName( apiGetWalk[0].user.name);
              setLastUpdated( apiGetWalk[0].updatedAt)
          }
      

      }
      // console.log(walkResult)
      
      useEffect( function(){
          loadPage();
      }, [] );

  return (
    <>
      <Head>
        <title>MY book Community</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <h1>Home page</h1>
        </div>
      </main>
      <div class="container-fluid">
                <div class="row"> 
                    {/* <div class="col-lg-12 mx-auto">
                        <h2 class="my-4">Welcome To The Books Forum!</h2>
                        <p>Books .</p>
                    </div> */}
                    <div class="row ml-2 mt-4">
                        <div class="col-lg-10 mx-auto mt-4">
                            <div class="row py-2"  style={{backgroundColor: "#90ee90", border: "1px solid #4ee44e"}}>
                                <div class="col-lg-8 my-2">
                                        <div class="row my-auto" >
                                            <div class="col-lg-2 mt-4">
                                                <div class="mt-4" style={{width: "80px", margin: "0 auto"}}><i class="fas fa-envelope-open-text fa-5x"></i> </div>
                                            </div>
                                            <div class="col-lg-10 mt-2">
                                            <Link href="/the-walks" className="nav-link" ><h3>General Discussion</h3></Link>
                                                <p class="ml-3">This is the place for all general book discussions. If you want to discuss a particular genre, please use the Library Shelves below.</p>
                                                <p class="ml-3"><b>Discussions</b><span class="px-2">{walkResult.length}</span><b>Messages</b><span class="px-2">{totalMessages}</span></p>
                                            </div>
                                        </div>     
                                </div>          
                                <div class="col-lg-4 my-2" style={{borderLeft: "2px solid #9f6934"}}>
                                    <div class="row my-auto"   >
                                        <div class="col-lg-12 ml-3 mt-4">
                                            <p><b>Latest by:</b><span class="px-2">{lastName}</span><b></b><span class="px-2">{lastUpdated}</span></p>
                                        </div>
                                        
                                    </div>
                                </div> 
                            </div> 
                        </div>
                        <div class="col-lg-10 mx-auto">
                            <div class="row py-2" style={{backgroundColor: "#90ee90", border: "1px solid #4ee44e"}}>
                                <div class="col-lg-8 my-2">
                                        <div class="row my-auto" >
                                            <div class="col-lg-2">
                                                <div class="mt-4" style={{width: "80px", margin: "0 auto"}}><i class="fas fa-envelope-open-text fa-5x"></i> </div>
                                            </div>
                                            <div class="col-lg-10  mt-2">
                                            <Link href="/the-walks" className="nav-link" ><h3>Lit & Classics</h3></Link>
                                                <p class="ml-3">An area to discuss the themes, books and authors of this genre.</p>
                                                <p class="ml-3"><b>Discussions</b><span class="px-2">10</span><b>Messages</b><span class="px-2">10</span></p>
                                            </div>
                                        </div>     
                                </div>          
                                <div class="col-lg-4 my-2" style={{borderLeft: "2px solid #9f6934"}}>
                                    <div class="row my-auto">
                                        <div class="col-lg-12  ml-3 mt-4">
                                        <p><b>Latest by:</b><span class="px-2">{lastName}</span><b></b><span class="px-2">{lastUpdated}</span></p>
                                        </div>
                                        
                                    </div>
                                </div> 
                            </div> 
                        </div>
                    </div>
                </div>
                
            </div>
    </>
  )
}
