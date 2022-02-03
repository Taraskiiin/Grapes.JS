import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';

const Contact = () => {
    const html = useSelector(
        (store: { getHtml: { component: string | null; html: any } }) =>
          store.getHtml
      );
      console.log(html)

    const [componentName, setComponentName] = useState<string>('contact')
    return (
        <div>
             {html.component === componentName && parse(html.html)}
        <NavLink to='/editor/?page=contact'>Edit</NavLink>
        </div>
    );
};

export default Contact;