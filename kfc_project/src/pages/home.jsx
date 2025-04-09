import { Navabr } from "../components/navbar"
import { Order } from "../components/order"
import { Contact } from "../components/contact"
import { Browselement } from "../arraybucket/homearray"





export function Home() {

    return (
       
        <>
  &lt;
  <upper>
    {/*  nav section  */}
    <nav>
      <div id="position">
        {/*  top section  */}
        <top>
          <div id="location">
            {" "}
            <p>
              {" "}
              <img
                src="https://online.kfc.co.in/static/media/Search_Pin.e88a4d93.svg "
                alt="locatnio"
              />{" "}
              Allow location access for local store menu and promos
              &nbsp;&nbsp;&nbsp;&nbsp;<button>Set location</button>
            </p>
          </div>
        </top>
        <hr />


     <Navabr/>
     
     
      </div>
    </nav>
  </upper>
  {/*  order  */}
  <order>


 <Order/>
    
    
    {/*  order-- image */}
    <div>
      <a href="./menu.html ">
        <img src="https://images.ctfassets.net/wtodlh47qxpt/3rG3DVKuArGcVVWvMJL0vL/6028fc17975a8c862c86fd67c0e54de5/web_1440x396px.jpg?w=1488&fit=fill&fm=webp" />
      </a>
    </div>
  </order>
  {/*  Browse  */}
  <div>
    <div id="browse">
      <div style={{ width: "30%" }}>
        {" "}
        <h2>
          {" "}
          <b>BROWSE CATEGORIES </b>
        </h2>
      </div>
      <div style={{ width: "70%" }}>
        <hr style={{ marginTop: 40 }} />
      </div>
    </div>
  </div>
  {/*  browse element */}
  <a href="./menu.html">
    <div id="roots">
      <Browselement/>
      </div>{" "}
  </a>
  {/*  contact section  */}
 

  <Contact/>

  
</>

    )
}