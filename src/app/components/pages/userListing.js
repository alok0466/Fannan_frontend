import React, { useState,useEffect } from "react";
import axios from "axios";
import DashboradMenu from "./../DashboardMenu";
import ListingImg from "./../../../assests/images/listing/05.jpg";
import UsHeader from "../Header/Userheader";
import { width } from "@mui/system";
import { users } from "../../../userContent";
// import Table from "./Tablelist";
const Listin = () => {
    const [data, setData] = useState(users);
    const [value, setValue] = useState("");
    const [sortvalue, sortsetValue] = useState("");
    // const [currentPage, setCurrentpage] = useState(0);
    // const [pageLimit] = useState(4);
    //  useEffect(()=>{
    //     loadUserData();
    // },[]);
    // const loadUserData = async () =>{
    //     return await axios
    //     .get("http://172.105.48.31:4000/Users")
    //     .then((response) => setData(response.data))
    //     .catch((err) => console.log(err));
    // };
    // console.log("data",data);
    const [isOpen, setIsOpen] = useState(false);
    const [isShown] = useState(false);
    const openUPopup = () => {
        setIsOpen(!isOpen);
    }
    const uClosePopup = () => {
        setIsOpen(false);
    }
    // const handleReset = () =>{
    //     loadUserData();
    // }
    // const handleSearch = async (e) =>{
    //   e.preventDefault();
    //   return await axios.get(`http://172.105.48.31:4000/Users?q=${value}`)
    //   .then((response) => {
    //     setData(response.data);
    //     setValue("");
    //   })
    //   .catch((err) => console.log(err));
    // }
    // const sortOptions = ["title","city", "category"];
    // const handleSort = async (e) =>{
    //     let value = e.target.value;
    //     sortsetValue(value);
    //     return await axios.get(`http://172.105.48.31:4000/Users?_sort=${value}&_order=asc`)
    //     .then((response) => {
    //       setData(response.data);
    //     })
    //     .catch((err) => console.log(err));
    //   }

    //   const renderPagination = () =>{
    //     if(currentPage === 0){
    //         return(
    //             <MDBPagination>
    //                 <MDBPaginationItem>
    //                     <MDBPaginationLink>1</MDBPaginationLink >
    //                 </MDBPaginationItem>
    //                 <MDBPaginationItem>
    //                     <MDBBtn onClick={() => loadUserData(4,8,1)}>Next</MDBBtn>
    //                 </MDBPaginationItem>
    //             </MDBPagination>
    //         );
    //     } else if(currentPage < pageLimit -1 && data.length === pageLimit){
    //         return(
    //             <MDBPagination>
    //                 <MDBPaginationItem>
    //                     <MDBBtn onClick={() => loadUserData((currentPage - 1) * 4, currentPage * 4, -1)}>Prev</MDBBtn>
    //                 </MDBPaginationItem>
    //                 <MDBPaginationItem>
    //                     <MDBPaginationLink>{currentPage + 1}</MDBPaginationLink >
    //                 </MDBPaginationItem>
    //                 <MDBPaginationItem>
    //                     <MDBBtn onClick={(() => loadUserData((currentPage) + 1) * 4,(currentPage + 2) * 4,1)}>Next</MDBBtn>
    //                 </MDBPaginationItem>
    //             </MDBPagination>
    //         )
    //     }
    //     else{
    //         return(
    //             <MDBPagination>
    //                 <MDBPaginationItem>
    //                     <MDBPaginationLink></MDBPaginationLink >
    //                 </MDBPaginationItem>
    //                 <MDBPaginationItem>
    //                     <MDBBtn onClick={() => loadUserData(4,8,1)}>Next</MDBBtn>
    //                 </MDBPaginationItem>
    //             </MDBPagination>
    //         )
    //     }
    //   }  
    // const [query,setquery] = useState('');
    // const search = (data) =>{
    //     return data.filter(item=>item.title.toLowerCase().includes(query)
    //     || item.title.toLowerCase().includes(query));
    //     return data.filter(item=>item.title.toUpperCase().includes(query)
    //     || item.title.toUpperCase().includes(query));
    // };
    // console.log(Users.filter(user =>user.title.toLowercase().includes("carpenter 1")));
    return (
        <>
            <UsHeader />
            <DashboradMenu />
            <div className="menu">
                <div className="container">
                    <div className="member-place-wrap">
                        <div className="member-wrap-top">
                            <h2 >My Listings</h2>
                            <p >You are current FREE plan. <a href="pricing-plan.html">Upgrade now</a>
                            </p>
                        </div>
                    </div>
                    <div className="member-filter text-left">
                        <div className="mf-left">
                            <form action="#" method="GET">
                                <div className="field-select">
                                    <select name="place_cities">
                                        <option>Please Select Category</option>
                                        {/* {sortOptions.map((item,index) => (
                                            <option value={item} key={index}>{item}</option>
                                        ))} */}
                                        <option value="0">All categories</option>
                                        <option value="Restaurant">Carpenter</option>
                                        <option value="Gym">Corporater</option>
                                        <option value="Beaty">Beaty &amp; Spa</option>
                                        <option value="Shopping">Shopping</option>
                                    </select>
                                    <i className="la la-angle-down"></i>
                                </div>
                                {/* <div className="filter">
                                    <h3>Filter By Status:</h3>
                                    <div className="btngroup">
                                        <button className="active-btn">Active</button>
                                        <button className="inactive-btn">Inactive</button>
                                    </div>
                                </div> */}
                            </form>
                        </div>
                        <div className="mf-right text-right">
                            <form className="site__search__form">
                                <div className="site__search__field">
                                    {/* <span className="site__search__icon">
                                        <i className="la la-search"></i>
                                    </span> */}
                                    <input 
                                    type="text" 
                                    placeholder="Search..." 
                                    className="site__search__input"
                                    value={value}
                                    onChange={(e) => setValue(e.target.value)}
                                    />
                                    <button type="submit">
                                    Search
                                    </button>
                                    {/* <button className="mx-2">
                                        Reset
                                    </button> */}
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="Addproust-wrp">
                        <button onClick={openUPopup}>Add Product</button>
                    </div>
                    {isOpen &&
                        <div className="user-product-popup">
                            <div className="popup-container">
                                <div className="popup popup-form open">
                                    <a title="Close" href="#" className="popup__close" onClick={uClosePopup}>
                                        <i className="las la-times la-24-black"></i>
                                    </a>
                                    <h3>Add Products</h3>
                                    <div className="popup-content user-popup">
                                        <form action="#" id="signup" className="form-sign form-content">
                                            <div className="field-inline">
                                                <div className="field-input">
                                                    <input type="file" className="choose-file" />
                                                </div>
                                            </div>
                                            <div className="field-inline">
                                                <div className="field-input">
                                                    <input type="text" placeholder="Title" name="" />
                                                </div>
                                                <div className="field-input">
                                                    <input type="text" placeholder="City" name="" />
                                                </div>
                                                <div className="field-input">
                                                    <input type="text" placeholder="Category" name="Category" />
                                                </div>
                                            </div>
                                            <input type="submit" name="submit" value="Save" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <table className="member-place-list table-responsive">
                        <thead >
                            <tr>
                                <th>
                                    <div className="field-check">
                                        <label for="all">
                                            <input id="all" type="checkbox" value="all" />
                                            <span className="checkmark">
                                                <i className="la la-check"></i>
                                            </span>
                                        </label>
                                    </div>
                                </th>
                                <th >ID</th>
                                <th >Thumb</th>
                                <th >Name</th>
                                <th >City</th>
                                <th >Category</th>
                                <th >Status</th>
                                <th >Action</th>
                            </tr>
                        </thead> 
                                {/* data.map((item,index) => ( */}
                                <tbody>
                                     <tr>
                                        {/* <th>{index + 1}</th> */}
                                        <td data-title="">
                                            <div className="field-check">
                                                <label for="place01">
                                                    <input id="place01" type="checkbox" value="all" />
                                                    <span className="checkmark">
                                                        <i className="la la-check"></i>
                                                    </span>
                                                </label>
                                            </div>
                                        </td>
                                        <td data-title="ID">1</td>
                                        <td data-title="Thumb">
                                            <img src={ListingImg} alt="Place Thumb" />
                                        </td>
                                        <td data-title="Place name"><b>title</b></td>
                                        <td data-title="City">location</td>
                                        <td data-title="Category">category</td>
                                        <td data-title="Status" className="approved">status</td>
                                        <td data-title="" className="place-action">
                                            <a href="#" title="Edit" className="edit">
                                                <i className="las la-edit"></i>
                                            </a>
                                            <a href="#" title="View" className="view">
                                                <i className="la la-eye"></i>
                                            </a>
                                            <a href="#" title="Delete" className="delete">
                                                <i className="la la-trash-alt"></i>
                                            </a>
                                        </td>
                                        </tr>
                                </tbody>
                    </table>


                   
                     {/* <div 
                     style={{
                        margin:"auto",
                        padding: "15px",
                        maxWidth: "400px",
                        alignContent: "center"
                    }}>{renderPagination()}</div> */}
                    <div _ngcontent-xyq-c26="" className="pagination align-left">
                        <div _ngcontent-xyq-c26="" className="pagination__numbers">
                            <span _ngcontent-xyq-c26="">1</span>
                            <a _ngcontent-xyq-c26="" title="2" href="#">2</a>
                            <a _ngcontent-xyq-c26="" title="3" href="#">3</a>
                            <a _ngcontent-xyq-c26="" title="Next" href="#">
                                <i _ngcontent-xyq-c26="" className="la la-angle-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Listin;