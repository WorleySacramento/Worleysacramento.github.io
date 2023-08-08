import Menu from "./menu";

const Header = props => (
  <div>
    {/* <img src="images/logo-hcode.png" className="img" /> */}
    <Menu />
    {props.content}
    <style jsx>{`
      div { 
        display: flex;
        justify-content: space-around;
      }
      .img {
        height: 40px; 
      }
    `}</style>
  </div>
);
export default Header;