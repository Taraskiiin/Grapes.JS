import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

const Contact = () => {
    const editions = useSelector(
        (store: { setEdit: { component: { component: string | null; html: any; css: any; js: any }} }) =>
          store.setEdit.component
      );
    const [componentName, setComponentName] = useState<string>('contact')
    return (
        <div>
             {editions.component === componentName && parse(editions.html)}
        <NavLink to='/editor/?page=contact'>Edit</NavLink>
        </div>
    );
};

export default Contact;