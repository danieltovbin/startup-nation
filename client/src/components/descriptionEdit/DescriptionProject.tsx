import './scss/description.scss'

const DescriptionProject = () => {
  return (
    <div className="description" style={{padding: "0 calc((100% - 818px) / 2) !important",}}>
        <p>איך מתארים את הפרויקט בצורה הטובה ביותר? המטרה היא לעניין אנשים, למשוך אותם פנימה לתוך הפרויקט, אנחנו רוצים ליצור רושם ראשוני מסקרן ומעניין</p>
        <form style={{display:'flex' ,flexDirection: "column",padding: "0 calc((100% - 818px) / 2) !important"}}>
            <label htmlFor="">שם הפרויקט</label>
            <input type="text" />
            <label htmlFor="">תיאור קצר של הפרויקט</label>
            <input type="text" />
            <label htmlFor="">קטגוריות נוספות לפרויקט(סה''כ ניתן להגדיר עד 3 קטגוריות)</label>
            <input type="text" />
            <label htmlFor="">תגיות הפרויקט(לא חובה)</label>
            <input type="text" />
            <label htmlFor="">תמונת הפרויקט</label>
            <input type="text" />
            <label htmlFor="">סרטון הפרויקט(לא חובה)</label>
            <input type="text" />
            <label htmlFor="">סכום הגיוס</label>
            <input type="text" />
        </form>
    </div>
  )
}

export default DescriptionProject