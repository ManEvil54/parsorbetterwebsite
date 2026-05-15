import { Link } from 'react-router-dom';

const Privacy = () => {
  return (
    <div className="landing-wrapper">
      <nav className="glass-nav">
        <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/"><img src="/images/logo.png" alt="Logo" style={{ height: '40px' }} /></Link>
          <Link to="/" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 700 }}>BACK TO HOME</Link>
        </div>
      </nav>
      <div className="section-container">
        <div className="glass-card" style={{ padding: '60px', lineHeight: '1.8' }}>
          <h1 style={{ marginBottom: '40px', fontSize: '3rem' }}>Privacy Policy</h1>
          <p style={{ color: 'var(--text-dim)', marginBottom: '40px' }}>Last Updated: May 15, 2026</p>
          
          <div style={{ color: 'var(--text-dim)' }}>
            <p style={{ marginBottom: '24px' }}>
              Your privacy is important to us. This Privacy Policy describes how Pars Or Better ("we", "us", or "our") collects, uses, and shares your personal information when you use the Pars Or Better mobile application and website.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>1. Information We Collect</h2>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '18px', marginBottom: '8px' }}>Registration Information</h3>
              <p>When you create an account, we collect your name, email address, and other contact details necessary to provide our services.</p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '18px', marginBottom: '8px' }}>Tournament Data</h3>
              <p>We collect information related to tournaments you create or join, including scores, pairings, tee times, and league participation details.</p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '18px', marginBottom: '8px' }}>Device Information</h3>
              <p>We may collect information about the device you use to access the App, including your IP address, device identifiers, operating system, and browser type.</p>
            </div>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>2. How We Use Your Information</h2>
            <ul style={{ marginBottom: '24px', paddingLeft: '20px' }}>
              <li style={{ marginBottom: '10px' }}>To provide, maintain, and improve the App's services and features.</li>
              <li style={{ marginBottom: '10px' }}>To create and manage your user account and authenticate your identity.</li>
              <li style={{ marginBottom: '10px' }}>To communicate with you about your account, tournaments, or service updates.</li>
              <li style={{ marginBottom: '10px' }}>To customize your experience and provide personalized content.</li>
              <li style={{ marginBottom: '10px' }}>To monitor and analyze usage and trends to enhance user experience.</li>
              <li style={{ marginBottom: '10px' }}>To ensure the security and integrity of our platform and its users.</li>
            </ul>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>3. How We Share Your Information</h2>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '18px', marginBottom: '8px' }}>With Tournament Participants</h3>
              <p>Information you provide, such as your username and tournament scores, will be visible to other participants in the same tournaments or leagues.</p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '18px', marginBottom: '8px' }}>With Service Providers</h3>
              <p>We may share your information with third-party vendors who perform services on our behalf, such as hosting, data analysis, and technical support.</p>
            </div>
            <div style={{ marginBottom: '24px' }}>
              <h3 style={{ color: 'var(--primary-color)', fontSize: '18px', marginBottom: '8px' }}>For Legal Reasons</h3>
              <p>We may disclose your information if required to do so by law, in response to a court order, or to protect the rights, property, or safety of Pars Or Better or others.</p>
            </div>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>4. Your Choices and Rights</h2>
            <p style={{ marginBottom: '24px' }}>
              You have the right to request access to, correction of, or deletion of your personal information. To exercise these rights, please contact us using the information provided below.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>5. Security</h2>
            <p style={{ marginBottom: '24px' }}>
              We use commercially reasonable physical, technical, and administrative measures to protect your data. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>6. Children's Privacy</h2>
            <p style={{ marginBottom: '24px' }}>
              Pars Or Better is not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '40px', marginBottom: '16px' }}>7. Contact Us</h2>
            <p>
              If you have any questions or concerns about this Privacy Policy or our data practices, please reach out to us at:<br />
              <a href="mailto:info@parsorbetter.com" style={{ color: 'var(--primary-color)', textDecoration: 'none', fontWeight: 700 }}>info@parsorbetter.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
