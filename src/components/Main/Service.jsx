import React from 'react';
import '../../pages/Service/ServicesPage.css'
import { Link } from 'react-router-dom';


/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Service = () => (
    <section className="servicios" id="servicios">
        <h2 className="heading">
            <FormattedMessage
                id='services'
                defaultMessage='Experience'
            />
        </h2>
        <div className="row">
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
                <i className="fas fa-drafting-compass"></i>
                <h3>
                    <FormattedMessage
                        id='design'
                        defaultMessage='Web Application Penetration Testing'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='design-info'
                        defaultMessage='Conducted comprehensive end-to-end security assessments of web applications, uncovering critical vulnerabilities such as XSS, SQLi, IDOR, and authentication bypasses. Emphasized manual testing techniques to simulate real-world attack scenarios and ensure deeper coverage beyond automated scans. Delivered clear, well-structured technical reports with detailed proof of concepts, accurate risk ratings, and actionable mitigation strategies to support remediation and strengthen application security.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="300">
                <i className="fas fa-laptop"></i>
                <h3>
                    <FormattedMessage
                        id='development'
                        defaultMessage='API Penetration Testing'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='development-info'
                        defaultMessage='Conducted API assessments focusing on RESTful and JSON-based APIs, targeting issues like Broken Object Level Authorization (BOLA), rate-limiting bypass, and token mismanagement. Leveraged Burp Suite, Postman, and custom scripts in Python to analyze endpoint behavior. Provided clear documentation on attack vectors and secured APIs with practical remediation steps.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="400">
                <i className="fas fa-chart-line"></i>
                <h3>
                    <FormattedMessage
                        id='marketing'
                        defaultMessage='iOS Application Security Testing'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='marketing-info'
                        defaultMessage='Performed comprehensive security testing on iOS applications, focusing on reverse engineering and runtime manipulation. Analyzed IPA packages using MobSF, class-dump, and Frida to uncover sensitive data exposure and improper cryptographic usage. Bypassed security controls such as jailbreak detection and certificate pinning using Objection and Frida scripts. Discovered vulnerabilities related to insecure local storage, weak authorization mechanisms, and privacy violations. Provided detailed security reports and remediation strategies aligned with iOS security.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="500">
                <i className="fas fa-wrench"></i>
                <h3>
                    <FormattedMessage
                        id='maintenance'
                        defaultMessage='Android Application Security Testing'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='maintenance-info'
                        defaultMessage='Conducted in-depth security assessments of Android applications, combining both dynamic and static analysis techniques. Specialized in reverse engineering APKs using tools like APKTool, JADX, JD-GUI, and MobSF to inspect app internals and identify hardcoded secrets, API keys, and business logic flaws. Performed runtime analysis with Frida, Objection, and ADB to detect insecure storage, insecure inter-process communication (IPC), and improper SSL implementations. Delivered actionable insights with full PoCs and technical risk impact for each finding.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="600">
                <i className="fas fa-search"></i>
                <h3>
                    <FormattedMessage
                        id='seo'
                        defaultMessage='Network Penetration Testing'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='seo-info'
                        defaultMessage='Assessed internal and external network infrastructure for misconfigurations and vulnerabilities using Nmap, Wireshark, Metasploit, and Nessus. Identified exposed services, open ports, and weak protocols. Delivered detailed attack paths, lateral movement analysis, and mitigation strategies to enhance perimeter and internal defenses.'
                    />
                </p>
            </div>
            <div className="columns" data-aos="fade-up" data-aos-delay="700">
                <i className="fas fa-tachometer-alt"></i>
                <h3>
                    <FormattedMessage
                        id='optimization'
                        defaultMessage='Cloud Penetration Testing (AWS)'
                    />
                </h3>
                <p>
                    <FormattedMessage
                        id='optimization-info'
                        defaultMessage='Specialized in AWS cloud security testing, identifying misconfigured IAM roles, open S3 buckets, exposed credentials, and insecure API Gateways. Used tools and manual techniques to assess EC2, Lambda, IAM, and other services for privilege escalation and data exfiltration paths. Provided organizations with detailed cloud threat models and post-assessment remediation guidance.'
                    />
                </p>
            </div>
        </div>
        {/* <div className='portafolio-btn'>
            <Link to="/service">
                <ButtomGet/>
            </Link>
        </div> */}
    </section>
);

export default React.memo(Service);