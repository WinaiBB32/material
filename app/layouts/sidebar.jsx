import Link from 'next/link';
import  styles  from '../styles/sidebar.module.css';
import {
  BiSolidBox,
  BiMenu  
} from "react-icons/bi";
import { menuItem } from '../data/menusidebar';

const username = [
  {
    username: "วินัย โตเขียว",
    role: "user"
  }
];

function Sidebar() {
  return (
    <>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h3 className={styles.brand}>
            <BiSolidBox className={styles.icon} />
            <span>Brand</span>
          </h3>
          <BiMenu className={styles.icon} />
        </div>
        <div className={styles.sidebarMenu}>
          <ul>
          {menuItem.map((item, index) => (
                
                (item.role.includes(username[0].role)  || item.role === "all") && (
            <li key={index}>
              <Link href={item.path} >
              {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
             )
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;