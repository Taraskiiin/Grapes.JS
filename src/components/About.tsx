import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import parseHTML from 'html-react-parser';
import { css, Styled } from 'react-css-in-js';

const About = () => {
    const editions = useSelector(
        (store: { setEdit: { component: { component: string | null; html: any; css: any; js: any }} }) =>
          store.setEdit.component
      );
  
    const [componentName, setComponentName] = useState<string>('about');

    return (
        <Styled>
            {editions.component === componentName && css`${editions.css}`}
            {editions.component === componentName && parseHTML(editions.html)}
        <NavLink to='/editor/?page=about'>Edit</NavLink>
        </Styled>
    );
};

export default About;

