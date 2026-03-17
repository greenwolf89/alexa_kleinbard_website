import ContactForm from '../components/ContactForm'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <div className={styles.page}>
      <section className={styles.section}>
        <h1 className={styles.title}>Contact</h1>
        <p className={styles.intro}>
          For inquiries about artwork, exhibitions, or collaborations, please send a message below.
        </p>
        <ContactForm />
      </section>
    </div>
  )
}
