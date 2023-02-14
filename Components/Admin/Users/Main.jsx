import React, { useState } from 'react'
import { UsersMain } from '../AdminStyle'

const USERMain = () => {
  const [type, setType] = useState("user")
  return (
    <UsersMain>
        <div className="top__details">
            <div className="t1 t">
              <h3>Number of Users</h3>
              <p>256</p>
            </div>

            <div className="t2 t">
              <h3>Number of Staffs</h3>
              <p>7</p>
            </div>

            {/* <div className="t3 t">

            </div> */}
        </div>

        <div className="options">
          <select onChange={(e)=>setType(e.currentTarget.value)}>
            <option value="user">Users</option>
            <option value="staff">Staffs</option>
          </select>
        </div>
      
      {
        type === "user" ?
        <table>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>

        </table>:
        <table>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone Number</th>
        </tr>
        <tr>
          <td>Taiwo Olaosebikan</td>
          <td>eolaosebikan60@gmail.com</td>
          <td>09048988583</td>
        </tr>
        <tr>
          <td>Dameola Olaosebikan</td>
          <td>eolaosebikan60@gmail.com</td>
          <td>09048988583</td>
        </tr>
        <tr>
          <td>Victoria Olaosebikan</td>
          <td>eolaosebikan60@gmail.com</td>
          <td>09048988583</td>
        </tr>
        <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>

          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>

          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>

          <tr>
            <td>Emmanuel Olaosebikan</td>
            <td>eolaosebikan60@gmail.com</td>
            <td>09048988583</td>
          </tr>
      </table>
      }
        
    </UsersMain>
  )
}

export default USERMain