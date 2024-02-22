import React from 'react';
import '../App.css';
import AwsCP from '../images/certifs/aws_cp.png'
import gitlab from '../images/certifs/gitlab.png'
import k8sgcp from '../images/certifs/k8s_gcp.png'
import k8s from '../images/certifs/k8s.png'
import AWSSAA from '../images/certifs/saa.png'

function Certifications() {

    /* add certifications here */

    const certifications = [
       
        {
            link: "https://www.credly.com/badges/97af293c-ecad-46b1-bf23-99f7d9446a0d/public_url",
            certImgSrc: k8s,
            certImgAlt: "Certified Kubernetes Administrator",
            certImgTitle: "Certified Kubernetes Administrator"
        },
        {
            link: "https://www.credly.com/badges/24a9cc00-1aa9-46f9-ad1d-6a3b1168bcbb/public_url",
            certImgSrc: AWSSAA,
            certImgAlt: "AWS Certified Solutions Architect",
            certImgTitle: "AWS Certified Solutions Architect"
        },
        {
            link: "https://www.credly.com/badges/4d602eaf-0e6b-48b9-a56d-f34b64fc13f9/public_url",
            certImgSrc: AwsCP,
            certImgAlt: "AWS Certified Cloud Practitioner",
            certImgTitle: "AWS Certified Cloud Practitioner"
        },
        {
            link: "https://gitlab.badgr.com/public/assertions/DJAdw2NqSEaCAro-fP1uWA",
            certImgSrc: gitlab,
            certImgAlt: "GitLab Certified Associate",
            certImgTitle: "GitLab Certified Associate"
        }
    ]

    return (
        <section id="certifications" className="container">
            <h2>Certifications</h2>
            <div id="image-certifs">
                {certifications.map((certification, id) => (
                <div className='certifs' key={id}>
                    <a href={certification.link} target="_blank" title={certification.certImgTitle}>
                        <img height="150px" width="150px" src={certification.certImgSrc} alt={certification.certImgAlt} />
                    </a>
                </div>
                ))}
            </div>
        </section>
    );
}

export default Certifications;