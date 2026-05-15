import { Link } from 'react-router-dom';

const Terms = () => {
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
          <h1 style={{ marginBottom: '40px', fontSize: '3rem' }}>Terms & Conditions</h1>
          <p style={{ color: 'var(--text-dim)', marginBottom: '40px' }}>Last Updated: May 15, 2026</p>

          <div style={{ color: 'var(--text-dim)' }}>
            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>1. Acceptance of Terms</h2>
            <p style={{ marginBottom: '20px' }}>
              By accessing or using the Pars Or Better App and website, you agree to be bound by these Terms and Conditions and our Privacy Policy. If you do not agree with any part of these terms, you must not use our services.
            </p>
            
            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>2. User Accounts</h2>
            <p style={{ marginBottom: '20px' }}>
              You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. You must notify us immediately of any unauthorized use of your account.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>3. App Services</h2>
            <p style={{ marginBottom: '20px' }}>
              Pars Or Better provides a platform for golf tournament management, scoring, and leaderboards. We reserve the right to modify, suspend, or discontinue any part of the service at any time without prior notice.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>4. User Conduct</h2>
            <p style={{ marginBottom: '20px' }}>
              You agree not to use the App for any unlawful purpose or in any way that could damage, disable, overburden, or impair the App's functionality. Prohibited activities include, but are not limited to, harassment, posting fraudulent information, and attempting to gain unauthorized access to our systems.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>5. Intellectual Property</h2>
            <p style={{ marginBottom: '20px' }}>
              All content, features, and functionality of the App—including text, graphics, logos, and software—are the exclusive property of Pars Or Better and are protected by international copyright, trademark, and other intellectual property laws.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>6. Disclaimer of Warranties</h2>
            <p style={{ marginBottom: '20px' }}>
              The App is provided on an "as is" and "as available" basis. Pars Or Better makes no warranties, expressed or implied, regarding the accuracy, reliability, or availability of the App or its content.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>7. Limitation of Liability</h2>
            <p style={{ marginBottom: '20px' }}>
              In no event shall Pars Or Better, its directors, or employees be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of the App or inability to use the service.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>8. Indemnification</h2>
            <p style={{ marginBottom: '20px' }}>
              You agree to indemnify and hold harmless Pars Or Better and its affiliates from any claims, losses, or damages, including legal fees, resulting from your violation of these terms or your use of the App.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>9. Governing Law</h2>
            <p style={{ marginBottom: '20px' }}>
              These terms shall be governed by and construed in accordance with the laws of the **State of Arizona**, without regard to its conflict of law provisions.
            </p>

            <h2 style={{ color: '#fff', fontSize: '24px', marginTop: '32px', marginBottom: '16px' }}>10. Changes to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms & Conditions at any time. Your continued use of the App following any changes constitutes your acceptance of the new terms. We encourage you to review this page periodically.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
