import Header from '@/app/ui/header/header';
import styles from '@/app/contact/contact.module.css'; 

const Contact = () => {
  return (
    <>
      <Header />
      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <div>Email: solo.obure@gmail.com</div>
          <div>LinkedIn: <a className={styles.contactLink} href="https://www.linkedin.com/in/solomonobure/">linkedin.com/in/solomonobure/</a></div>
          <div>GitHub: <a className={styles.contactLink} href="https://github.com/sobure">@sobure</a></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
