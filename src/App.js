  import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar'
import BookList from './components/BookList'
import NewBookForm from './components/BookForm'; 
import { useAuth0 } from '@auth0/auth0-react'


import Authentication from "./components/Authentication";



function App() {
 const { isAuthenticated } = useAuth0();
  
  
  return (
    <div className="App">
      <Authentication />


      {isAuthenticated && (
      
       
        <BookContextProvider>
          <Navbar />
          <BookList />
          <NewBookForm />
        </BookContextProvider>
      )
      }
    </div>
  );
}

export default App;
