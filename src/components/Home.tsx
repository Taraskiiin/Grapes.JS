import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';

const Home = () => {
    const editions = useSelector(
        (store: { setEdit: { component: { component: string | null; html: any; css: any; js: any }}}) =>
          store.setEdit.component
      );
    const [componentName, setComponentName] = useState<string>('home')
    console.log(editions.component, editions.css, editions.html, editions.js)
    return (
        <>
         {/* {editions === componentName && parse(editions)} */}
       <NavLink to='/editor/?page=home'>Edit</NavLink>
        </>
    );
};

export default Home;