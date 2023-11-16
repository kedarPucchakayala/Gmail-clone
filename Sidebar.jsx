import React, { useState } from 'react'
import './sidebar.css'

import {  BsFillChatSquareTextFill ,BsPeopleFill} from "react-icons/bs";
import { RiImageFill,RiSpam2Fill,RiSettings4Fill } from "react-icons/ri";
import { FaRegStar,FaRegClock ,FaRegFile, FaRegEnvelope} from "react-icons/fa6";
import { VscSend , VscChevronDown, VscChevronUp } from "react-icons/vsc";
import { MdLabelImportantOutline,MdScheduleSend } from "react-icons/md"
import { AiTwotoneTag,AiOutlinePlus } from "react-icons/ai"  
import { FiTrash2 } from "react-icons/fi"
import { BiTag,BiMessageAlt } from "react-icons/bi"

const Sidebar = () => {
   const intialItems = [
    {icon: <RiImageFill/>, text :'Inbox'},
    {icon:<FaRegStar/>,text:'Starred'},
    {icon:<FaRegClock/>,text:'Snoozed'},
    {icon:<VscSend/>,text:'Sent'},
    {icon:<FaRegFile/>,text:'Drafts'},
   ];

   const additionalItems = [
    {icon:<MdLabelImportantOutline/>,text:'Important'},
    {icon:<BsFillChatSquareTextFill/>,text:'Chats'},
    {icon:<MdScheduleSend/>,text:'Scheduled'},
    {icon:<FaRegEnvelope/>,text:'All Mail'},
    {icon:<RiSpam2Fill/>,text:'Spam'},
    {icon:<FiTrash2/>,text:'Bin'},
    {icon:<BiTag/>,text:'Categories'},
    {icon:<BsPeopleFill/>,text:'Social'},
    {icon:<RiSpam2Fill/>,text:'Updates'},
    {icon:<BiMessageAlt/>,text:'Forums'},
    {icon:<AiTwotoneTag/>,text:'Promotions'},
    {icon:<RiSettings4Fill/>,text:'Manage labels'},
    {icon:<AiOutlinePlus/>,text:'Create new label'}

   ];
   const [showMoreItems,setShowMoreitems] = useState(false);
   const [selectedItem , setSelectedItem] = useState(0);// it defaults to the first item

   const handleItemClick = (index) =>{
        setSelectedItem(index);
   }
   
   
   const itemsToDisplay = showMoreItems ? [...intialItems,...additionalItems] : intialItems;


  return (

    <aside className='sidebar'>
      
      <div className="list-items">
        <ul style={{marginTop:"20px"}}>
         {itemsToDisplay.map((item,index) => (
          <li 
          key={index} 
          className='list' 
          onClick={()=> handleItemClick(index)}
          style={{backgroundColor: selectedItem === index ? '#a8c7fa' : 'transparent',}}
          >
            <span className='icon'>{item.icon}</span>
            <span className='text'>{item.text}</span>
          </li>
         ))}
          
        </ul>
        <li className='btn' onClick={() => setShowMoreitems(!showMoreItems)}>{showMoreItems ? <VscChevronUp/> : <VscChevronDown/>}More</li>
       </div>

    </aside>
  )
}

export default Sidebar
