
import Link from "next/link";
import { BiSolidIdCard } from "react-icons/bi";
import DataTeble from "./components/teble";

function Main() {
  return (
    <main>
      <h2 className="dash_title">Overview</h2>
      <div className="dash_cards">
        <div className="card_single">
          <div className="card_body">
            <span><BiSolidIdCard /></span>
            <div>
              <h5>ยืมครุภัณฑ์</h5>
              <h4>2</h4>
            </div>
          </div>
        </div>
        <div className="card_single">
          <div className="card_body">
            <span><BiSolidIdCard /></span>
            <div>
              <h5>ครอบครองครุภัณฑ์</h5>
              <h4>3</h4>
            </div>
          </div>
        </div>
        <div className="card_single">
          <div className="card_body">
            <span><BiSolidIdCard /></span>
            <div>
              <h5>ทั้งหมด</h5>
              <h4>5</h4>
            </div>
          </div>
        </div>
      </div>
    <DataTeble />
    </main>
  )
}
export default Main