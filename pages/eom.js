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
          <h3>Abhinav Rajhans</h3>

          <h6>Software Engineer</h6>
          <img src='data:image/jpeg;base64,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' />
          <p>Competitive Programmer</p>
          
          <h3>Jeet Sharma</h3>
          <h6>Codechef Coder</h6>
           <img src="https://images.unsplash.com/photo-1633305926160-a1990685673e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1169&q=80"/>
           <p>Coder</p>
          </div>
      </div>
    </div>
  )
}
export default EOM
