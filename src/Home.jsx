
import { useState, useEffect, useCallback } from 'react'
// import UserComp from './components/UserComp';
import Textfield from '@atlaskit/textfield';
import "./Home.css"
import Button, { ButtonGroup } from '@atlaskit/button';
import Example from './Example';


function Home({showAllEmployees}) {
    const [users, setUsers] = useState([])
    const [searchUser, setSearchUser] = useState("");
    const [shortlisted, setShortlisted] = useState([]);
    // const [showAllEmployees, setShowAllEmployees] = useState(false);
    const [limit, setLimit] = useState(15)
    const [skip, setSkip] = useState(0)

    // const [gender, setGender] = useState('female')

    const shortlistEmployee = (currUser) => {
      setShortlisted( prev => [...prev, {currUser}] )
    }

    const handlePrevPage = () => {
      if(skip > 0){
        setSkip(prev => prev-15)
      }
    }

    const handleNextPage = () => {
      setSkip(prev => prev+15)
      // fetchFunc()
    }

    const fetchFunc = () => {
      // fetch(`https://dummyjson.com/users/search?q=${searchUser}`)
        // fetch(`https://dummyjson.com/users/filter?key=gender&value=${gender}`)
         fetch(`https://dummyjson.com/users?q=${searchUser}&limit=${limit}&skip=${skip}`)
        .then(res => res.json())
        .then((resJson) => {
          setUsers(resJson.users)
        } );
    }

    useEffect(() => {
      fetchFunc()
    }, [searchUser, skip])

    console.log(users)
    console.log(shortlisted)

  return (

    <div className='home' >

      {
        showAllEmployees ? (
    <>
        
        <div>
            {/* <input type="text" value={gender} onChange={ (e) => setGender(e.target.value) } /> */}
            <Textfield value={searchUser} onChange={(e) => setSearchUser(e.target.value)} name="basic" aria-label="default text field" />
        </div>

        <div className='user-table' >
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Blood Group</th>
                        <th>Email</th>
                        <th>Phone Number</th>
                      </tr>
                    </thead>
                    { users.map((user, i) => (
                    <tbody key={i} >
                      <tr>
                        <td>{user.firstName} {user.lastName}</td>
                        <td>{user.company.name}</td>
                        <td>{user.bloodGroup}</td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>
                          {/* <Button appearance="primary" onClick={openModal}>Open modal</Button> */}
                          <Example shortlistEmployee={shortlistEmployee} user={user} />
                        </td>
                      </tr>
                    </tbody>
                    ))
                  }
                </table>
        </div>

        <div className='footer' >
          <Button appearance="primary" onClick={handlePrevPage}>Prev</Button>
          <Button appearance="primary" onClick={handleNextPage}>Next</Button>
        </div>
        </>
        ) : (
          <div >
            <div className='user-table' >
                  <table>
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Company</th>
                        <th>Blood Group</th>
                        <th>Email</th>
                        <th>Roll Number</th>
                      </tr>
                    </thead>
                    { shortlisted.map((user, i) => (
                    <tbody key={i} >
                      <tr>
                        <td>{user.currUser.firstName} {user.currUser.lastName}</td>
                        <td>{user.currUser.company.name}</td>
                        <td>{user.currUser.bloodGroup}</td>
                        <td>{user.currUser.email}</td>
                        <td>{user.currUser.phone}</td>
                      </tr>
                    </tbody>
                    ))
                  }
                </table>
            </div>
          </div>
        )

      }

        

    </div>
  )
}

export default Home

