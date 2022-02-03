import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';

const Home = () => {
    const html = useSelector(
        (store: { getHtml: { component: string | null; html: any } }) =>
          store.getHtml
      );
      console.log(html)

    const [componentName, setComponentName] = useState<string>('home')

    return (
        <>
         {html.component === componentName && parse(html.html)}
       <NavLink to='/editor/?page=home'>Edit</NavLink>
        </>
    );
};

export default Home;