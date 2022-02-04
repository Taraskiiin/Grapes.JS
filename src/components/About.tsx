import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import parseHTML from 'html-react-parser';
import useInlineStyle from 'react-use-inline-style';

const About = () => {
    const editions = useSelector(
        (store: { setEdit: { component: { component: string | null; html: any; css: any; js: any }} }) =>
          store.setEdit.component
      );
    const [componentName, setComponentName] = useState<string>('about');
    const [getStyle, setStyle] = useInlineStyle(() => editions.css);
    console.log(getStyle(), editions.css)
    return (
        <div style = {getStyle()}>
        {editions.component === componentName && parseHTML(editions.html)}
        <NavLink to='/editor/?page=about'>Edit</NavLink>
        </div>
    );
};

export default About;

