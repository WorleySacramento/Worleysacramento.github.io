// import Link from "next/link"

// const layoutLink = {
//     color: '#333',
//     textDecoration: 'none'

// }
// const layoutMenu = {
//     display: 'inline-block',
//     minWidth: '150px',
//     fontFamily: 'calibri',
//     color: '#333'
// }
// let categories = [
//     {
//         label:'JavaScript',
//         link:'/javascript',
//         icon: '../public/images/js.png'
//      },
//      {
//         label:'PHP 7',
//         link:'/php',
//         icon: '../public/images/php.png'
//      },
//      {
//         label:'HTML5',
//         link:'/html5',
//         icon: '../public/images/html5.png'
//      },
//      {
//         label:'Bootstrap 4',
//         link:'/bootstrap',
//         icon: '../public/images/bootstrap.png'
//      }
//     ]
     
// const Menu = (props )=> (
//     <nav>
//          <ul>
//       <li>
//         <Link href="/">Home</Link>
//       </li>
//       <li>
//         <Link href="/about">About Us</Link>
//       </li>
//       <li>
//         <Link href="/blog/hello-world">Blog Post</Link>
//       </li>
//     </ul>
//     </nav>
// )

// export default Menu



import Link from "next/link";
import React from "react";
import styles from './menu.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
    <ul className={styles.navlinks}>
        <li className={styles.links}><Link href="/">Principal</Link></li>
        <li className={styles.links}><Link href="/pageWork">Projetos</Link></li>
        <li className={styles.links}><Link href="/">Contatos</Link></li>
    </ul>
  </nav>

  );
};
export default Navbar;