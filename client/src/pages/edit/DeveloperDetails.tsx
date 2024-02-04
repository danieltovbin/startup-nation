import React from 'react'
import EditLayout from '../../layouts/EditLayout'
import './scss/description.scss'
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import { Container, SvgIcon, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DeveloperDetails = () => {
  const navigate = useNavigate();

  return (
    <EditLayout>
      <div className="description">
        <div className='description-container'>
          <p>גם כאן כמו בכל מקום, אנשים מתחברים לאנשים. לכן, ההיכרות איתך חשובה - מי האדם מאחורי הפרויקט, מה הביא אותך לכאן וכל פרט שיחבר למקום האישי ולהיכרות אמיתית איתך.</p>
          <form style={{ display: 'flex', flexDirection: "column", maxWidth: "580px" }}>
            <label htmlFor="">שם היזם/ת</label>
            <input type="text" />
            <label htmlFor="">מקום מגורים</label>
            <input style={{ height: "68px", padding: "11px" }} type="text" />
          </form>
        </div>
      </div>
    </EditLayout>
  )
}

export default DeveloperDetails