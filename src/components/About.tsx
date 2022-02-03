import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';


const About = () => {
    const html = useSelector(
        (store: { getHtml: { component: { component: string | null; html: any }} }) =>
          store.getHtml.component
      );
    const [componentName, setComponentName] = useState<string>('about');
    return (
        <>
        {html.component === componentName && parse(html.html)}
        <NavLink to='/editor/?page=about'>Edit</NavLink>
        </>
    );
};

export default About;