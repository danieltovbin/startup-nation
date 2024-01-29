import './scss/description.scss'

const DescriptionProject = () => {
  return (
    <div className="description">
      <div className='description-container'>
        <p>איך מתארים את הפרויקט בצורה הטובה ביותר? המטרה היא לעניין אנשים, למשוך אותם פנימה לתוך הפרויקט, אנחנו רוצים ליצור רושם ראשוני מסקרן ומעניין</p>
        <form style={{display:'flex' ,flexDirection: "column", maxWidth: "580px"}}>
            <label htmlFor="">שם הפרויקט</label>
            <input type="text" />
            <label htmlFor="">תיאור קצר של הפרויקט</label>
            <input style={{height: "68px",padding: "11px"}} type="text" />
            <p className='title'>קטגוריות נוספות לפרויקט<span> (סה''כ ניתן להגדיר עד 3 קטגוריות)</span></p>
            <input style={{height: "40px"}} type="text" />
            <label htmlFor="">תגיות הפרויקט(לא חובה)</label>
            <input type="text" />
            <label htmlFor="">תמונת הפרויקט</label>
            <input type="file" />
            <label htmlFor="">סרטון הפרויקט(לא חובה)</label>
            <input type="text" />
            <label htmlFor="">סכום הגיוס</label>
            <input type="text" />
        </form>
        </div>
    </div>
  )
}

export default DescriptionProject