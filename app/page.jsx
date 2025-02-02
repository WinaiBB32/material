
import Link from "next/link";
import { BiSolidIdCard } from "react-icons/bi";

function Main() {
  return (
    <main>
      <h2>Overview</h2>
      <div className="dashboard_cards">
        <div className="card_single">
          <div className="card_body">
            <BiSolidIdCard />
            <div>
              <h5>ยืมครุภัณฑ์</h5>
              <h4>0</h4>
            </div>
          </div>
          <div className="card_footer">
            <Link href="#">View all</Link>
          </div>
        </div>
        <div className="card_single">
          <div className="card_body">
            <BiSolidIdCard />
            <div>
              <h5>ยืมครุภัณฑ์</h5>
              <h4>0</h4>
            </div>
          </div>
          <div className="card_footer">
            <Link href="#">View all</Link>
          </div>
        </div>
        <div className="card_single">
          <div className="card_body">
            <BiSolidIdCard />
            <div>
              <h5>ยืมครุภัณฑ์</h5>
              <h4>0</h4>
            </div>
          </div>
          <div className="card_footer">
            <Link href="#">View all</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
export default Main