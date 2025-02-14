import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactPage = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Contact Us</h1>
      <ul style={styles.list}>
        <li style={styles.listItem}>
          <a href="https://www.facebook.com/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaFacebook style={styles.icon} /> Facebook
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://www.twitter.com/yourprofile" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaTwitter style={styles.icon} /> Twitter
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://www.instagram.com/heyy.asad" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaInstagram style={styles.icon} /> Instagram
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://www.linkedin.com/in/mohdasadali" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaLinkedin style={styles.icon} /> LinkedIn
          </a>
        </li>
        <li style={styles.listItem}>
          <a href="https://www.github.com/asadali-07" target="_blank" rel="noopener noreferrer" style={styles.link}>
            <FaGithub style={styles.icon} /> GitHub
          </a>
        </li>
      </ul>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#faf5ff',
    padding: '20px',
  },
  header: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    color: '#7e22ce',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
  },
  listItem: {
    margin: '10px 0',
  },
  link: {
    textDecoration: 'none',
    color: '#7e22ce',
    fontSize: '1.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    marginRight: '10px',
    fontSize: '2rem',
  },
};

export default ContactPage;