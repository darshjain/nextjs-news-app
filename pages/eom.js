import styles from '../styles/EOM.module.css'
import { Toolbar } from '../components/toolbar'
export const EOM = ({ employee }) => {
  return (
    <div className="page-container">
      <Toolbar />
      <div className={styles.main}>
        <h1>Employee Of The Month </h1>
        <div className={styles.employeeOfTheMonth}>
          <h3>Darsh Jain</h3>

          <h6>Software Engineer</h6>
          <img src='https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_250,q_auto:good,w_250/v1/gcs/platform-data-dsc/avatars/darsh_jain.jpeg' />
          <p>Blockchain Developer</p>
        </div>
      </div>
    </div>
  )
}
export default EOM
