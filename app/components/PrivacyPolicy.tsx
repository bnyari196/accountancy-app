import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="prose prose-lg max-w-none">
        {/* Header */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-rose-900 mb-4">Privacy Policy</h1>
          <div className="w-24 h-1 bg-rose-900 mx-auto"></div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <p className="text-gray-700 leading-relaxed text-lg">
            This privacy policy notice is served by Tyrone Tax and VAT Specialists. The purpose of this 
            policy is to explain to you how we control, process, handle, and protect your personal 
            information through the business and while you browse or use this website.
          </p>
          <p className="text-gray-700 leading-relaxed text-lg mt-4">
            If you do not agree to the following policy, you may wish to cease viewing/using this website 
            and/or refrain from submitting your personal data to us.
          </p>
        </div>

        {/* Policy Key Definitions */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Policy Key Definitions</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2 text-gray-700">
              <li><strong>&quot;I&quot;, &quot;our&quot;, &quot;us&quot;, or &quot;we&quot;</strong> refer to the business, Tyrone Tax and VAT Specialists.</li>
              <li><strong>&quot;you&quot;, &quot;the user&quot;</strong> refer to the person(s) using this website.</li>
              <li><strong>GDPR</strong> means General Data Protection Regulation.</li>
              <li><strong>PECR</strong> means Privacy & Electronic Communications Regulations.</li>
              <li><strong>ICO</strong> means Information Commissioner&apos;s Office.</li>
              <li><strong>Cookies</strong> mean small files stored on a user&apos;s computer or device.</li>
            </ul>
          </div>
        </section>

        {/* Key Principles of GDPR */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Key Principles of GDPR</h2>
          <p className="text-gray-700 mb-4">Our privacy policy embodies the following key principles:</p>
          <div className="grid md:grid-cols-2 gap-3">
            {[
              'Lawfulness, fairness and transparency',
              'Purpose limitation',
              'Data minimisation',
              'Accuracy',
              'Storage limitation',
              'Integrity and confidentiality',
              'Accountability'
            ].map((principle, index) => (
              <div key={index} className="flex items-center p-3 bg-rose-50 rounded-lg">
                <span className="text-rose-900 font-semibold mr-2">({String.fromCharCode(97 + index)})</span>
                <span className="text-gray-700">{principle}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Your Individual Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Your Individual Rights</h2>
          <p className="text-gray-700 mb-4">Under the GDPR your rights are as follows:</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <ul className="space-y-2">
              {[
                'the right to be informed',
                'the right of access',
                'the right to rectification',
                'the right to erasure',
                'the right to restrict processing',
                'the right to data portability',
                'the right to object',
                'the right not to be subject to automated decision-making including profiling'
              ].map((right, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-rose-900 mr-2">•</span>
                  <span className="text-gray-700">{right}</span>
                </li>
              ))}
            </ul>
            <p className="text-gray-700 mt-4">
              You also have the right to complain to the ICO [
              <a href="https://www.ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-rose-900 hover:text-rose-700 underline">
                www.ico.org.uk
              </a>
              ] if you feel there is a problem with the way we are handling your data.
            </p>
            <p className="text-gray-700 mt-2">
              We handle subject access requests in accordance with the GDPR.
            </p>
          </div>
        </section>

        {/* Internet Cookies */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Internet Cookies</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If you leave a comment on our site you may opt-in to saving your name, email address and 
              website in cookies. These are for your convenience so that you do not have to fill in your 
              details again when you leave another comment. These cookies will last for one year.
            </p>
            <p>
              If you have an account and you log in to this site, we will set a temporary cookie to 
              determine if your browser accepts cookies. This cookie contains no personal data and is 
              discarded when you close your browser.
            </p>
            <p>
              When you log in, we will also set up several cookies to save your login information and 
              your screen display choices. Login cookies last for two days, and screen options cookies 
              last for a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks. If 
              you log out of your account, the login cookies will be removed.
            </p>
            <p>
              If you edit or publish an article, an additional cookie will be saved in your browser. 
              This cookie includes no personal data and simply indicates the post ID of the article you 
              just edited. It expires after 1 day.
            </p>
          </div>
        </section>

        {/* Analytics */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Analytics – How Long We Retain Your Data</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              If you leave a comment, the comment and its metadata are retained indefinitely. This is so 
              we can recognise and approve any follow-up comments automatically instead of holding them 
              in a moderation queue.
            </p>
            <p>
              For users that register on our website (if any), we also store the personal information 
              they provide in their user profile. All users can see, edit, or delete their personal 
              information at any time (except they cannot change their username). Website administrators 
              can also see and edit that information.
            </p>
          </div>
        </section>

        {/* Data Rights */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">What Rights You Have Over Your Data</h2>
          <div className="bg-rose-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              If you have an account on this site, or have left comments, you can request to receive an 
              exported file of the personal data we hold about you, including any data you have provided 
              to us. You can also request that we erase any personal data we hold about you. This does 
              not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>
          </div>
        </section>

        {/* Where We Send Your Data */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Where We Send Your Data</h2>
          <p className="text-gray-700 leading-relaxed">
            Visitor comments may be checked through an automated spam detection service.
          </p>
        </section>

        {/* Data Security */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Data Security and Protection</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-700 leading-relaxed">
              We ensure the security of any personal information we hold by using secure data storage 
              technologies and precise procedures in how we store, access, and manage that information. 
              Our methods meet GDPR compliance requirements.
            </p>
          </div>
        </section>

        {/* Fair & Transparent Privacy */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-rose-900 mb-4">Fair & Transparent Privacy Explained</h2>
          <p className="text-gray-700 leading-relaxed">
            We have provided some further explanations about user privacy and the way we use this website 
            to help promote a transparent and honest user privacy methodology.
          </p>
        </section>

        {/* Contact Information */}
        <section className="mt-12 bg-rose-900 text-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4">Contact Us About Privacy</h3>
          <p className="mb-4">
            If you have any questions about this privacy policy or your personal data, please contact us:
          </p>
          <div className="space-y-2">
            <p>Email: <a href="mailto:tyronetax@outlook.com" className="underline hover:text-rose-200">tyronetax@outlook.com</a></p>
            <p>Phone: <a href="tel:07485731689" className="underline hover:text-rose-200">074 8573 1689</a></p>
          </div>
        </section>
      </div>
    </div>
  )
}

export default PrivacyPolicy